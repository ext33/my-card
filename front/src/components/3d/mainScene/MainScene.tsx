import React, { FC, useEffect } from "react"

import {
  Color, EquirectangularReflectionMapping, HalfFloatType,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene, TextureLoader, WebGLCubeRenderTarget,
  WebGLRenderer
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"

const MainScene: FC = () => {

  const initScene = () => {
    let controls: any
    let camera: any, scene: any, renderer: any

    const init = () => {
      // Initialize loaders
      const loader = new FontLoader()

      // Initialize scene settings
      const width = window.innerWidth
      const height = window.innerHeight
      const bgColor = new Color("#FFFFFF")
      const message = "ext33"

      // Initialize scene
      scene = new Scene()
      scene.background = bgColor

      camera = new PerspectiveCamera(40,  width / height, 0.5, 1000)
      camera.position.set(0, 70, 600)

      renderer = new WebGLRenderer({
        canvas: document.getElementById("main_scene__canvas") || undefined
      })

      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(width, height)

      // Init light
      const pointLight = new PointLight(0xffffff, 1.5)
      pointLight.position.set(0, 100, 300)

      // Load environment
      const cubeRenderTarget = new WebGLCubeRenderTarget(256)
      cubeRenderTarget.texture.type = HalfFloatType

      new TextureLoader()
        .setPath("/assets/textures/")
        .load("water.jpg", function (texture) {

          texture.mapping = EquirectangularReflectionMapping

          scene.environment = texture
        })

      // Set material
      const material = new MeshStandardMaterial({
        envMap: scene.environment,
        roughness: 0.05,
        metalness: 1,
      })

      // Initialize controls
      controls = new OrbitControls(camera, renderer.domElement)
      controls.target.set(0, 0, 0)
      controls.update()
      controls.enablePan = false
      controls.enableDamping = true
      controls.enableZoom = false

      // Create resize handler
      const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()

        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener("resize", onWindowResize)

      // Load text
      loader.load("/assets/fonts/graffonti.json", (font) => {
        const geometry = new TextGeometry(message, {
          font: font,
          size: 110,
          height: 40,
          curveSegments: 10,
          bevelThickness: 2,
          bevelSize: 1.5,
          bevelEnabled: false,
        })

        geometry.computeBoundingBox()
        const xMid = - 0.5 * ((geometry.boundingBox?.max.x || 1) - (geometry.boundingBox?.min.x || 0))
        geometry.translate(xMid + 10, -10, 0)

        const text = new Mesh(geometry, material)

        text.position.y = 0

        scene.add(text)
      })
    }

    // Render
    const renderScene = () => {
      requestAnimationFrame(renderScene)
      scene.rotation.x += 0.0030
      scene.rotation.y += 0.0030

      controls.update()

      renderer.render(scene, camera)
    }

    init()
    renderScene()
  }

  useEffect(() => {
    if (window) {
      initScene()
    }
  }, [])

  return (
    <canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        background: "#ffffff",
      }}
      id="main_scene__canvas"
    />
  )
}

export default MainScene
