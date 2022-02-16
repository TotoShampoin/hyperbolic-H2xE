
export const load_tile = url => {
    const three = new THREE.Group();
    const ground = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(1, 1, 4, 4),
        new THREE.MeshStandardMaterial({side: THREE.DoubleSide, color: 0xAAAA55})
    ); ground.geometry.rotateX(-Math.PI/2);
    const cube = new THREE.Mesh(
        new THREE.BoxBufferGeometry(.2, .2, .2, 2, 2, 2),
        new THREE.MeshStandardMaterial({color: 0x55AAAA})
    ); cube.position.set(.15, .25, .15);
    three.add(ground);
    three.add(cube);
    three.children.forEach(m => {
        m.frustumCulled = false
    });
    return three;
}