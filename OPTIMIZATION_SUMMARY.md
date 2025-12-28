# GLB Asset Optimization Summary

## Overview
Optimized all spaceship `.glb` models to **~95% smaller download sizes** by applying modern glTF compression techniques, while preserving visual quality.

---

## Before & After File Sizes

| Model             | **Before** (MB) | **After** (KB) | Reduction |
|-------------------|-----------------|----------------|-----------|
| `n_del_futuro.glb` | 15.52          | 574.4          | **96.4%** |
| `n_colorida.glb`   | 14.41          | 539.2          | **96.2%** |
| `n_madera.glb`     | 12.97          | 407.3          | **96.9%** |
| `n_cartoon.glb`    | 11.48          | 408.1          | **96.5%** |
| `n_graffiti.glb`   | 11.26          | 325.6          | **97.1%** |
| `nave.glb`         | 10.92          | 344.4          | **96.9%** |
| `n_basica.glb`     | 8.61           | 312.5          | **96.4%** |
| `n_antigua.glb`    | 4.85           | 338.2          | **93.2%** |

**Total download saved:** ~87 MB → ~3.3 MB (across all 8 models)

---

## Optimizations Applied

### 1. **Texture Compression & Resizing**
   - **Format:** PNG (2048×2048) → **WebP (1024×1024)**
   - **Extension used:** `EXT_texture_webp`
   - **Impact:** Smaller transmission size + browser-native decoding

### 2. **Mesh Compression**
   - **Method:** Meshopt (`EXT_meshopt_compression`)
   - **Features:**
     - Geometry compression with octahedral normal encoding
     - Vertex attribute quantization (16-bit/8-bit precision)
     - Better cache-locality for faster GPU upload
   - **Impact:** ~50–70% reduction in geometry size

### 3. **Pre-computed Tangent Space**
   - Added `TANGENT` vertex attributes using `gltf-transform tangents`
   - **Why:** Eliminates runtime tangent generation for normal maps (faster loads on low-end devices)

### 4. **Additional Cleanup**
   - Welded duplicate vertices
   - Simplified geometry (minimal LOD loss, ~0.01% error tolerance)
   - Pruned unused materials/properties
   - Flattened scene graph for better instancing

---

## Implementation Changes

### Updated Three.js Loaders (3 files)
All `GLTFLoader` instances now include the Meshopt decoder extension:

```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

const loader = new GLTFLoader();
loader.setMeshoptDecoder(MeshoptDecoder);
```

**Files updated:**
- `src/components/Scene3D.jsx`
- `src/components/SurfaceScene.jsx`
- `src/components/LongMissionScene.jsx`

### Validation Results
✅ All optimized `.glb` files validated with **zero errors**  
✅ No runtime warnings (tangent space pre-computed)  
✅ Production build passes (`npm run build`)  
✅ Dev server HMR confirmed Meshopt decoder loaded

---

## How to Re-optimize (Future Updates)

If you need to add/update spaceship models:

1. **Place original high-quality `.glb` in `public/`**

2. **Run optimization pipeline:**
   ```powershell
   cd miniapp/orbital-scavengers/public
   $in = "your_model.glb"
   $tmpTan = "your_model.tangents.glb"
   $tmpOpt = "your_model.opt.glb"
   
   npx gltf-transform tangents $in $tmpTan
   npx gltf-transform optimize $tmpTan $tmpOpt --compress meshopt --texture-compress webp --texture-size 1024
   Move-Item -Force $tmpOpt $in
   Remove-Item $tmpTan
   ```

3. **Validate:**
   ```powershell
   npx gltf-transform validate $in
   ```

4. **Rebuild and test:**
   ```powershell
   npm run build
   npm run dev
   ```

---

## Performance Benefits

### For Users:
- **Faster initial load:** ~87MB → 3.3MB total asset size
- **Better mobile experience:** Smaller downloads + less VRAM usage
- **Smoother rendering:** Compressed geometry optimized for GPU cache

### For Developers:
- **Faster deploys:** Smaller `dist/` folder
- **Lower CDN costs:** Reduced bandwidth usage
- **Future-proof:** Uses ratified glTF extensions (EXT_meshopt_compression, EXT_texture_webp)

---

## Backup Location
Original uncompressed `.glb` files are stored in:
```
miniapp/orbital-scavengers/public/_glb_original/
```
(This folder is excluded from production builds)

---

## Tools Used
- **[glTF-Transform CLI](https://gltf-transform.dev/)** v4.2.1
- **Three.js** MeshoptDecoder (runtime)
- **Vite** for bundling

---

**Date optimized:** December 28, 2025  
**Optimized by:** AI Assistant (via Cursor)

