/*鸟类*/
function Bird(imgArr, x, y) {
	// 图片数组
	this.imgArr = imgArr;
	// 定义图片的索引值
	this.index = parseInt(Math.random() * imgArr.length);
	// 精确一张图片
	this.img = this.imgArr[this.index];
	// 图片的x点
	this.x = x;
	// 图片的y点
	this.y = y;
	// 鸟的状态
	this.state = "D"; // D: down  U: up
	// 为了确保鸟的速度，定义一个speed属性
	this.speed = 0;
}

// 鸟煽动翅膀
Bird.prototype.fly = function() {
	// 改变图片的索引值
	this.index++;
	// 判断索引值的有效值
	if (this.index > this.imgArr.length - 1) {
		this.index = 0;
	}
	// 这里只是改变了索引值， 没有改变图片
	this.img = this.imgArr[this.index];	
}

// 鸟下降
Bird.prototype.fallDown = function() {
	// 判断鸟的状态
	if (this.state == "D") {
		// 改变speed属性
		this.speed++;
		this.y += Math.sqrt(this.speed);
	} else {
		this.speed--;
		if (this.speed == 0) {
			// 改变鸟的状态
			this.state = "D";
			return;
		}
		// 鸟应该上升
		this.y -= Math.sqrt(this.speed);
	}
}

// 鸟的上升
Bird.prototype.goUp = function() {
	this.speed = 20;
	// 改变鸟的状态
	this.state = "U";
	
}