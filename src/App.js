import { Canvas } from "@react-three/fiber";
import "./index.css";
import { Suspense, useRef, useState } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shoe.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={4}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.customColor.laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customColor.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props.customColor.caps}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props.customColor.inner}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customColor.soul}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customColor.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={props.customColor.band}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props.customColor.patch}
      />
    </group>
  );
}

function App() {
  const [mesh, setMesh] = useState("#ffffff");
  const [laces, setLaces] = useState("#ffffff");
  const [caps, setCaps] = useState("#ffffff");
  const [inner, setInner] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [band, setBand] = useState("#ffffff");
  const [soul, setSoul] = useState("#ffffff");
  const [patch, setPatch] = useState("#ffffff");

  return (
    <div>
      <div className="wrapper">
        <div className="card">
          <div className="product-canvas">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight />
                {/* <spotLight
                  intensity={50}
                  angle={0.1}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow
                /> */}
                <pointLight
                  color={"white"}
                  intensity={50}
                  position={[0, 5, 5]}
                />
                <OrbitControls />
                <Model
                  customColor={{
                    mesh: mesh,
                    laces: laces,
                    caps: caps,
                    inner: inner,
                    stripes: stripes,
                    band: band,
                    soul: soul,
                    patch: patch,
                  }}
                />
              </Suspense>
            </Canvas>
          </div>
          <h2>Color chooser</h2>
          <div className="colors">
            <div>
              <input
                type="color"
                id="mesh"
                name="mesh"
                value={mesh}
                onChange={(e) => setMesh(e.target.value)}
              />
              <label for="mesh">Main</label>
            </div>

            <div>
              <input
                type="color"
                id="laces"
                name="laces"
                value={laces}
                onChange={(e) => setLaces(e.target.value)}
              />
              <label for="laces">Laces</label>
            </div>

            <div>
              <input
                type="color"
                id="caps"
                name="caps"
                value={caps}
                onChange={(e) => setCaps(e.target.value)}
              />
              <label for="caps">Caps</label>
            </div>

            <div>
              <input
                type="color"
                id="inner"
                name="inner"
                value={inner}
                onChange={(e) => setInner(e.target.value)}
              />
              <label for="inner">Inner</label>
            </div>

            <div>
              <input
                type="color"
                id="stripes"
                name="stripes"
                value={stripes}
                onChange={(e) => setStripes(e.target.value)}
              />
              <label for="stripes">Stripes</label>
            </div>

            <div>
              <input
                type="color"
                id="band"
                name="band"
                value={band}
                onChange={(e) => setBand(e.target.value)}
              />
              <label for="band">Band</label>
            </div>

            <div>
              <input
                type="color"
                id="soul"
                name="soul"
                value={soul}
                onChange={(e) => setSoul(e.target.value)}
              />
              <label for="soul">Soul</label>
            </div>

            <div>
              <input
                type="color"
                id="patch"
                name="patch"
                value={patch}
                onChange={(e) => setPatch(e.target.value)}
              />
              <label for="patch">Patch</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
