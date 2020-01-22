let that
class Tab {
  constructor(id) {
    that = this
    this.main = document.querySelector(id)
    this.lis = this.main.querySelectorAll('li')
    this.closebtns = this.main.querySelectorAll('.close')
    this.sections = this.main.querySelectorAll('section')
    this.addbtn = this.main.querySelector('button')
    this.ul = this.main.querySelector('.header')
    this.content = this.main.querySelector('.content')
    this.spans = this.main.querySelectorAll('span')
  }
  init() {
    this.newElement()
    // 初始化操作,使元素绑定事件
    this.addbtn.addEventListener('click',this.addTab)
   for (let i = 0; i < this.lis.length; i++) {
     this.lis[i].index = i
     this.closebtns[i].index = i
     this.lis[i].addEventListener('click',this.toggleTab)
     this.closebtns[i].addEventListener('click',this.removeTab)
     this.spans[i].addEventListener('dblclick',this.editTab)
     this.sections[i].addEventListener('dblclick',this.editTab)
   }
  }
  newElement() {
    // 重新获取元素
    this.lis = this.main.querySelectorAll('li')
    this.closebtns = this.main.querySelectorAll('.close')
    this.sections = this.main.querySelectorAll('section')
  }
  // 清除所有类名
  clearClass() {
    this.lis.forEach(item => item.className = '')
    this.sections.forEach(item => item.className = '')
  }
  // 切换功能
  toggleTab() {
    that.newElement()
    that.clearClass()
    that.lis[this.index].className = 'liactive'
    that.sections[this.index].className = 'conactive'
  }
  // 添加功能
  addTab() {
      that.clearClass()
      let li = '<li class="liactive"><div class="close">x</div>new Tab</li>'
      let section = '<section class="conactive">新tab</section>'
      that.ul.insertAdjacentHTML('beforeend', li)
      that.content.insertAdjacentHTML('beforeend', section)
      that.init()
  }
  // 删除功能
  removeTab(e) {
        e.stopPropagation();
        console.log(this.index)
        that.lis[this.index].remove()
        that.sections[this.index].remove()
        that.init()
        if(document.querySelector('.liactive')) return
        that.lis[this.index-1] && that.lis[this.index-1].click()
  }
  // 修改功能
  editTab() {
    this.innerHTML = `<input type="text" class= "heardInput" value = "${this.innerHTML}"/>`
    let input = this.children[0];
    input.select()
    input.onblur = function() {
      this.parentNode.innerHTML = this.value
    }
  }
}
let tab = new Tab('#tab')
tab.init()
