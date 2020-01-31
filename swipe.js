class Swipe {
	constructor(main,right,imgs,lis,left) {
	    this.main=document.querySelector(main);
		this.right=document.querySelector(right);
		this.imgs=document.querySelectorAll(imgs);
		this.lis=document.querySelectorAll(lis);
		this.left=document.querySelector(left);
		this.index=0;
		this.phNum=parseInt(this.lis.length)
		this.autoplay=''
	}
	init(){
		this.right.addEventListener('click',this.rightClick.bind(this))
		this.left.addEventListener('click',this.leftClick.bind(this))
		this.main.addEventListener('mouseenter',this.mouseStatic.bind(this))
		this.lis.forEach((v,i)=>{
			this.lis[i].addEventListener('click',this.pointClick.bind(this,i))
		})
		this.autoPlay() 
		this.main.addEventListener('mouseleave',this.mouseLave.bind(this))
		
	} 
	// 点击右键向右切换功能
	rightClick(){
		if(this.index===this.phNum-1){
			this.index=-1
		}
		this.imgs.forEach((v,i)=>{
			v.style.display='none'
			this.lis[i].className=''
		})
		this.index++;
		this.imgs[this.index].style.display='block';
		this.lis[this.index].className='on'
				console.log(this.index)
	}
	// 点击左键向左切换功能
	leftClick(){
		if(this.index===0){
			this.index=this.phNum
		}
		this.imgs.forEach((v,i)=>{
			v.style.display='none'
			this.lis[i].className=''
		})
		this.index--;
		this.imgs[this.index].style.display='block'
		this.lis[this.index].className='on'
						console.log(this.index)
	}
	// 点击圆点切换圆点功能
	pointClick(i){
		console.log()
		this.imgs.forEach((v,i)=>{
			v.style.display='none'
			this.lis[i].className=''
		})
		this.imgs[i].style.display='block' 
		this.lis[i].className='on'
		this.index=i
	}
	// 自动播放功能
	autoPlay(){
		this.autoplay=setInterval(this.rightClick.bind(this),3000)
	}
	// 当鼠标悬停不动功能
	mouseStatic(){
		clearInterval(this.autoplay)
	}
	// 当鼠标离开再播放
	mouseLave(){
		this.autoPlay()
	}
}
var swipe=new Swipe('#wrap','#right','img','li','#left')
swipe.init()