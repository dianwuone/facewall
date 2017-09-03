import 'babel-polyfill'
import $ from 'jquery'
// const THREE = require('three')
let imgArr = [
  [
    {smallImg: 'static/image/1-1.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-2.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-3.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-4.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-5.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-6.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-7.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-8.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-9.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-10.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-11.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-12.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-13.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-14.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-15.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-16.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-17.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-18.jpg', bigImg: 'static/image/bigImg1.jpeg'},
  ],
  [
    {smallImg: 'static/image/2-1.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-2.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-3.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-4.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-5.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-6.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-7.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-8.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-9.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-10.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-11.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-12.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-13.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-14.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-15.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-16.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-17.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-18.jpg', bigImg: 'static/image/bigImg2.jpeg'},
  ],
  [
    {smallImg: 'static/image/3-1.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-2.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-3.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-4.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-5.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-6.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-7.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-8.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-9.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-10.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-11.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-12.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-13.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-14.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-15.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-16.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-17.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-18.jpg', bigImg: 'static/image/bigImg3.jpeg'},
  ],
  [
    {smallImg: 'static/image/4-1.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-2.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-3.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-4.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-5.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-6.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-7.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-8.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-9.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-10.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-11.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-12.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-13.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-14.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-15.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-16.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-17.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-18.jpg', bigImg: 'static/image/bigImg4.jpg'},
  ],
  [
    {smallImg: 'static/image/5-1.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-2.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-3.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-4.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-5.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-6.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-7.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-8.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-9.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-10.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-11.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-12.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-13.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-14.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-15.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-16.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-17.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-18.jpg', bigImg: 'static/image/bigImg5.jpeg'},
  ],
  [
    {smallImg: 'static/image/6-1.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-2.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-3.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-4.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-5.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-6.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-7.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-8.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-9.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-10.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-11.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-12.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-13.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-14.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-15.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-16.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-17.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-18.jpg', bigImg: 'static/image/bigImg6.jpeg'},
  ],
]
$(function(){
    let scene, renderer, camera, controls
    let randomObj = new THREE.Object3D()
    let originObjList = new THREE.Object3D()
    class Facewall{
        constructor(canvas){
            this.canvas = canvas
            this.wallObjects = null
            this.wall
            this.interval = 0
        }
        add(wall){
          const self = this
          const index = this.wallObjects.children.length
          randomObj = new THREE.Object3D()
          let targetObj = new THREE.Object3D()
          let randomSingleObj = new THREE.Object3D()

          wall.wallArr.forEach((val, i)=>{
            const element = document.createElement('img')
            element.width = 60
            element.height = 60
            element.className = 'single-img'
            element.src = val.thumb
            // $(element).data('outIndex', i)
            // $(element).data('innerIndex', index)
            // $(element).data('orignal', val.orignal)
            this.randomPosition(element, scene, randomSingleObj)
            //顺序排列位置
            let obj = new THREE.Object3D()
            obj.position.x = index * self.interval - (self.canvas.offsetWidth/2) + self.interval
            obj.position.y = Math.floor(i/6)*60
            obj.position.z = i%6 == 0 ? 0 : ((i%6) *60 - 180)
            obj.rotation.y = (-1) * Math.PI/2
            targetObj.add(obj)
          })
          this.wallObjects.add(targetObj)
          scene.add(randomObj)
          randomObj.add(randomSingleObj)
          transformSingle(targetObj, 0, 500)
          this.transformToCenter()
        }
        //增加墙以后将其置于中心
        transformToCenter(){
          const self = this
          this.interval = this.canvas.offsetWidth/(this.wallObjects.children.length+1)
          this.wallObjects.children.forEach((wall, index)=>{
            wall.children.forEach((face, i)=>{
              face.position.x = index * self.interval - (self.canvas.offsetWidth/2) + self.interval
            })
          })

          // this.wallObjects.children.forEach((targetArr, i)=>{
          //   targetArr.children.forEach((target, index)=>{
          //     new TWEEN.Tween(target.children[i].children[index].position)
          //         .to({x: target.position.x, y: target.position.y, z: target.position.z},Math.random() * duration + duration)
          //         .easing( TWEEN.Easing.Exponential.InOut )
          //         .start()

          //     new TWEEN.Tween( target.children[i].children[index].rotation )
          //         .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
          //         .easing( TWEEN.Easing.Exponential.InOut )
          //         .start()
          //   })
          // })



        }
        //随机位置
        randomPosition(element, scene, randomSingleObj){
          let cssObj = null
          cssObj = new THREE.CSS3DObject(element)
          cssObj.position.x = Math.random() * 4000 - 2500
          cssObj.position.y = Math.random() * 4000 - 2500
          cssObj.position.z = Math.random() * 4000 - 2500
          scene.add(cssObj)
          randomSingleObj.add(cssObj)
        }
        init(wall){
            const self = this
            let wallObjects = new THREE.Object3D()
            this.wallObjects = wallObjects
            let objects = [],
                // randomObj = []
            // let selectObject = []
            selectObject = new THREE.Object3D()
            let mouseX = 0, mouseY = 0
            const images = wall
            this.interval = self.canvas.offsetWidth/(images.length+1)
            initRender()
            animate()

            function initRender(){
              scene = new THREE.Scene()
              camera = new THREE.PerspectiveCamera( 40, self.canvas.offsetWidth / self.canvas.offsetWidth, 1, 10 )
              camera.position.z =1200

              //renderer
              renderer = new THREE.CSS3DRenderer()
              renderer.setSize(self.canvas.offsetWidth, self.canvas.offsetHeight)
              renderer.domElement.style.position = 'absolute'
              self.canvas.appendChild( renderer.domElement )

              //添加图片
              images.forEach((imgSrcArr, i)=>{
                //test
                const singleWall = new THREE.Object3D()

                let randomSingleObj = new THREE.Object3D()
                let singleObj = []
                imgSrcArr.wallArr.forEach((val, index)=>{
                  let cssObj = null
                  const element = document.createElement('img')
                  element.width = 60
                  element.height = 60
                  element.className = 'single-img'
                  element.src = val.thumb
                  $(element).data('outIndex', i)
                  $(element).data('innerIndex', index)
                  $(element).data('orignal', val.orignal)
                  //随机位置
                  self.randomPosition(element, scene, randomSingleObj)
                  //顺序排列位置
                  let obj = new THREE.Object3D()
                  obj.position.x = i * self.interval - (self.canvas.offsetWidth/2) + self.interval
                  obj.position.y = Math.floor(index/6)*60
                  obj.position.z = index%6 == 0 ? 0 : ((index%6) *60 - 180)
                  obj.rotation.y = (-1) * Math.PI/2
                  // singleObj.push(obj)
                  singleWall.add(obj)
                })
                scene.add(randomSingleObj)
                randomObj.add(randomSingleObj)
                // objects.push(singleObj)

                wallObjects.add(singleWall)

              })
              console.warn(randomObj.children)
              scene.add(randomObj)

              // wallObjects.children
              //坐标中心点用来测试
              // const element = document.createElement('div')
              // element.className = 'single-div'
              // cssObj = new THREE.CSS3DObject(element)
              // cssObj.position.x = 0
              // cssObj.position.y = 50
              // cssObj.position.z = 0
              // scene.add(cssObj)

              render(scene, camera)
              //从随机位置到固定位置
              transform(wallObjects, 2000)
              // controls
              controls = new THREE.TrackballControls( camera, renderer.domElement )
              controls.rotateSpeed = 4
            }

            //交互
            $('.single-img').on('click', function(image){
              //loading
              let loading = $(`<div class="loading-container" id="loadingContainer">
                                <div class="loader-inner square-spin">
                                  <div></div>
                                </div>
                              </div>`)

              const transformString = $.trim($(this)[0].style.transform.split('matrix3d')[1].split(',')[14])
              if(transformString == 500){
              //   //显示大图弹出框
                let container = document.createElement('div')
                const close = document.createElement('i')
                close.innerHTML = 'x'
                const element = document.createElement('img')

                $(container).append(loading)

                element.width = 500
                element.src = $(this).data('orignal')
                element.onload = function(){
                  loading.remove()
                  container.appendChild(element)
                  container.appendChild(close)
                }

                container.className = 'big-img-container'
                close.className = 'big-img-close'
                close.id = 'big-img-close'
                element.className = 'big-img'

                const orignalObj = new THREE.CSS3DObject(container)
                orignalObj.position.x = 0
                orignalObj.position.y = 0
                orignalObj.position.z = 600
                scene.add(orignalObj)
                $(close).on('click', function(){
                  $(container).hide()
                })
              }
              else{
                //reset所有位置
                wallObjects = new THREE.Object3D()

                images.forEach((imgSrcArr, i)=>{
                  let singleWall = new THREE.Object3D()
                  imgSrcArr.wallArr.forEach((val, index)=>{
                    //顺序排列位置
                    let obj = new THREE.Object3D()
                    obj.position.x = i * self.interval - (window.innerWidth/2) + self.interval
                    obj.position.y = Math.floor(index/6)*60
                    obj.position.z = index%6 == 0 ? 0 : ((index%6) *60)
                    obj.rotation.y = (-1) * Math.PI/2
                    singleWall.add(obj)
                  })
                  wallObjects.add(singleWall)
                })
                transform(wallObjects, 0)

                const index = $(this).data('outIndex')

                //将选择的墙显示到最前面
                let selectWall = new THREE.Object3D()
                wallObjects.children[index].children.forEach((val, i)=>{
                    let obj = new THREE.Object3D()
                    obj.position.x = i%6 == 0 ? 0 : ((i%6) *60-180)
                    obj.position.y = Math.floor(i/6)*60
                    obj.position.z = 500
                    obj.rotation.y = 0
                    selectObject.add(obj)
                })
                transformSingle(selectObject, index, 500)
              }




            })
        }
    }
    //整体动画
    function transform(targets, duration){
      targets.children.forEach((targetArr, i)=>{
        targetArr.children.forEach((target, index)=>{
          new TWEEN.Tween(randomObj.children[i].children[index].position)
              .to({x: target.position.x, y: target.position.y, z: target.position.z},Math.random() * duration + duration)
              .easing( TWEEN.Easing.Exponential.InOut )
              .start()

          new TWEEN.Tween( randomObj.children[i].children[index].rotation )
              .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
              .easing( TWEEN.Easing.Exponential.InOut )
              .start()
        })
      })
    }

      //单个墙的动画
    function transformSingle(selectObject, index, duration){
      selectObject.children.forEach((target, i)=>{
        if(randomObj.children[index].children[i]){
          new TWEEN.Tween( randomObj.children[index].children[i].position )
            .to({x: target.position.x, y: target.position.y, z: target.position.z},Math.random() * duration + duration)
            .easing( TWEEN.Easing.Exponential.InOut )
            .start()
          new TWEEN.Tween( randomObj.children[index].children[i].rotation )
            .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start()
        }
      })
    }
    //动画
    function animate(){
      requestAnimationFrame(animate)
      render(scene, camera)
      TWEEN.update()
      controls.update()
      //禁止垂直方向旋转
      camera.position.y = 0
      camera.rotation.x = 0
      camera.rotation.z = 0
      camera.lookAt(new THREE.Vector3(0,0,0))
    }
    function render(scene, camera){
      renderer.render(scene, camera)
    }
    // class wall
    // class Wall extends Facewall{
    class Wall{
        constructor(wallArr){
            // super(canvas, interval)
            this.wallArr = []
            wallArr.forEach((val, index)=>{
                this.wallArr.push({thumb: val.thumb, orignal: val.orignal})
            })
            this.id = ''
        }
        add(id, thumb){
            this.id = id
            const singleThumb = {thumb: thumb.thumb, orignal: thumb.orignal}
            this.wallArr.push(singleThumb)
            this.pushThumbnail(singleThumb)
            return this.wallArr
        }
        del(thumb){
          scene.remove(thumb)
        }
        destroy(){
          const destroyWall = this.wallArr
          for(let i = scene.children.length; i >= 0; i--){
            destroyWall.forEach((singleWall, wallIndex)=>{
              if(scene.children[i] && scene.children[i].element.src.includes(singleWall.thumb)){
                scene.remove(scene.children[i])
              }
            })
          }
        }
        pushThumbnail(thumb){
            let cssObj = null
            const element = document.createElement('img')
            element.width = 60
            element.height = 60
            element.className = 'single-img'
            element.src = thumb.thumb
            $(element).data('outIndex', this.id)
            $(element).data('innerIndex', this.wallArr.length-1)
            //随机位置
            cssObj = new THREE.CSS3DObject(element)
            cssObj.position.x = Math.random() * 1000 - 250
            cssObj.position.y = Math.random() * 1000 - 250
            cssObj.position.z = Math.random() * 1000 - 250
            scene.add(cssObj)
            //顺序排列位置
            let obj = new THREE.Object3D()
            obj.position.x = this.id * interval - (renderer.getSize().width/2) + interval
            obj.position.y = Math.floor((this.wallArr.length-1)/6)*60
            obj.position.z = (this.wallArr.length-1)%6 == 0 ? 0 : (((this.wallArr.length-1)%6) *60 - 180)
            obj.rotation.y = (-1) * Math.PI/2
            originObjList.add(obj)
            new TWEEN.Tween(cssObj.position)
                .to({x: obj.position.x, y: obj.position.y, z: obj.position.z},Math.random() * 1000 + 1000)
                .easing( TWEEN.Easing.Exponential.InOut )
                .start()

            new TWEEN.Tween( cssObj.rotation )
                .to( { x: obj.rotation.x, y: obj.rotation.y, z: obj.rotation.z }, Math.random() * 1000 + 1000 )
                .easing( TWEEN.Easing.Exponential.InOut )
                .start()
        }
    }




    // class Thumbnail
    class Thumbnail{
        constructor(thumb, orignal){
            this.thumb = thumb
            this.orignal = orignal
        }
        url(){
          return this.thumb
        }
        orignalUrl(){
          return this.orignal
        }
        to(wall){
          const thum = this
          wall.wallArr.shift()
          wall.wallArr.push(thum)
        }
    }


    let wallList = []
    imgArr.forEach((val, index)=>{
        let wallArr = []
        val.forEach(img=>{
            const thumb = new Thumbnail(img.smallImg, img.bigImg)
            wallArr.push(thumb)
        })
        const wall = new Wall(wallArr)
        wallList.push(wall)
    })

    const canvas = document.getElementById('container')
    const faceWall = new Facewall(canvas)
    faceWall.init(wallList)

    //test
    //wall.add(id, thumb)
    $('#addThumb').on('click', ()=>{
        const thumb = new Thumbnail('static/image/1-2.jpg', 'static/image/bigImg1.jpeg')
        const wallId = Math.floor(Math.random() * 6)
        wallList[wallId].add(wallId,thumb)
    })
    //wall.del(thumb)
    $('#delThumb').on('click', ()=>{
      const wallId = Math.floor(Math.random() * 6)
      const thumbId = Math.floor(Math.random() * 108)
      wallList[wallId].del(scene.children[thumbId])
    })
    //wall.destroy()
    $('#destroyWall').on('click', ()=>{
      const wallId = Math.floor(Math.random() * 6)
      wallList[wallId].destroy()
    })
    //thumb.to(wall)
    $('#thumbToWall').on('click', ()=>{
      const thumb = new Thumbnail('static/image/1-2.jpg', 'static/image/bigImg1.jpeg')
      const wallId = Math.floor(Math.random() * 6)
      thumb.to(wallList[wallId])
    })
    // facewall.addWall()
    $('#addWall').on('click', ()=>{
      const wall = wallList[0]
      faceWall.add(wall)
    })
})












