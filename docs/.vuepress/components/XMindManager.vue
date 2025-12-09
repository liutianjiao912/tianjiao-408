<!--
  参考链接：
    - https://www.npmjs.com/package/xmind-embed-viewer
    - https://xmindltd.github.io/xmind-embed-viewer/
  注意：
    - 使用ClientOnly内置组件，只在客户端加载，避免依赖构建出错
-->
<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { XMindEmbedViewer } from "xmind-embed-viewer";
import mapData from "../public/mind-map/index.json";

interface MapDataItem {
  name: string;
  xMindPath: string;
}

const viewer = ref<XMindEmbedViewer | null>(null);
const xmindIndex = ref(0);
const loading = ref(false);
const error = ref<string | null>(null);

const xmindFileList = ref(mapData.map(({ name }) => name));
const xmindFile = ref(
  (mapData as MapDataItem[]).length > 0
    ? (mapData as MapDataItem[])[0].xMindPath
    : ""
);

watch(xmindIndex, async (newIndex) => {
  if (!viewer.value) return;

  loading.value = true;
  error.value = null;

  try {
    const { xMindPath } = (mapData as MapDataItem[])[newIndex];
    const xmindResponse = await fetch(xMindPath);

    if (!xmindResponse.ok) {
      throw new Error(
        `Failed to fetch XMind file: ${xmindResponse.statusText}`
      );
    }

    const data = await xmindResponse.arrayBuffer();
    viewer.value.setZoomScale(100);
    viewer.value.load(data);
  } catch (err) {
    error.value = err instanceof Error ? err.message : "Unknown error";
    console.error("Error loading XMind file:", err);
  } finally {
    loading.value = false;
  }
});

onMounted(async () => {
  loading.value = true;
  error.value = null;

  try {
    const res = await fetch(xmindFile.value);
    if (!res.ok) {
      throw new Error(`Failed to fetch initial XMind file: ${res.statusText}`);
    }

    viewer.value = new XMindEmbedViewer({
      el: "#x-mind-manager-container",
      file: await res.arrayBuffer(),
      // 国内：cn 全球：global
      region: "cn",
      styles: {
        width: "100%",
        minHeight: "600px",
        height: "auto",
        maxHeight: "1200px",
      },
    });
  } catch (err) {
    error.value = err instanceof Error ? err.message : "Unknown error";
    console.error("Error initializing XMind viewer:", err);
  } finally {
    loading.value = false;
  }
});

async function handleOpenLocalBtnClick() {
  const fileSelector = document.createElement("input");
  fileSelector.style.display = "none";
  fileSelector.setAttribute("type", "file");
  fileSelector.setAttribute("accept", ".xmind");

  document.body.appendChild(fileSelector);

  try {
    await new Promise<void>((resolve, reject) => {
      fileSelector.addEventListener("change", () => {
        if (fileSelector.files && fileSelector.files.length > 0) {
          resolve();
        } else {
          reject(new Error("No file selected"));
        }
      });
      fileSelector.addEventListener("cancel", () => {
        reject(new Error("File selection cancelled"));
      });
      fileSelector.click();
    });

    const file = fileSelector.files?.[0];
    if (!file || !viewer.value) return;

    const data = await file.arrayBuffer();
    viewer.value.load(data);
  } catch (err) {
    console.error("Error opening local file:", err);
  } finally {
    document.body.removeChild(fileSelector);
  }
}

function handleZoomScaleRevertBtnClick() {
  viewer.value?.setFitMap();
}
</script>

<template>
  <div class="x-mind-container">
    <div v-if="loading" class="loading">加载中...</div>
    <div v-if="error" class="error">错误: {{ error }}</div>
    <div id="x-mind-manager-container" />
    <div class="btn-container">
      <button
        id="openLocalBtn"
        @click="handleOpenLocalBtnClick"
        :disabled="loading"
      >
        打开本地
      </button>
      <button
        id="zoomScaleBtn"
        @click="handleZoomScaleRevertBtnClick"
        :disabled="!viewer || loading"
      >
        还原缩放
      </button>

      <div class="select">
        <select v-model="xmindIndex" :disabled="loading">
          <option
            v-for="(xmind, index) in xmindFileList"
            :key="index"
            :value="index"
          >
            {{ xmind }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-container {
  margin: 50px 0;
  text-align: center;
}

.select {
  display: inline-block;
  width: 200px;
  position: relative;
  vertical-align: middle;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
  color: #555;
  border: 1px solid #aaa;
  text-shadow: none;
  border-radius: 4px;
  transition: box-shadow 0.25s ease;
  z-index: 1;
}

.select:hover {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.select:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: #ccc;
  top: 14px;
  right: 10px;
  cursor: pointer;
  z-index: -2;
}

.select select {
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border: none;
  background: transparent none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.select select:focus {
  outline: none;
}

#x-mind-manager-container {
  width: 100%;
  height: 600px;
}

button {
  background: #eb94d0;
  background-image: linear-gradient(to bottom, #eb94d0, #2079b0);
  border-radius: 10px;
  box-shadow: 6px 5px 24px #666666;
  font-family: Arial, serif;
  margin: 5px;
  color: #fafafa;
  font-size: 14px;
  padding: 5px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover:not(:disabled) {
  background: #2079b0;
  background-image: linear-gradient(to bottom, #2079b0, #eb94d0);
  text-decoration: none;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.loading,
.error {
  text-align: center;
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;
}

.loading {
  background-color: #f0f0f0;
  color: #666;
}

.error {
  background-color: #ffe0e0;
  color: #cc0000;
}
</style>
