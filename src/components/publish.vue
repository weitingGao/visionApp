<template>
	<div class="publish">
		<router-link to="/find">
			<img src="../assets/goback.png" class="back_icon">
		</router-link>
		<p class="topTitle">发布</p>
		<div class="publish_choose">
			
		</div>
<!-- 发布内容 -->
		<div class="publish_box">
			<input type="string" name="title" class="publish_title" placeholder="点击编辑作品标题">
			<div class="publish_coverImg">
				
			</div>
			<div class="publish_text">
				
			</div>
			<p>正文</p>
			<div class="publish_describe">
				
			</div>
			<div class="publish_img">
				
			</div>
		</div>
<!-- 发布按钮 -->
		<div class="public_button_box">
			<div>
				<img src="../assets/addText.png" class="addText_icon" >
				<img src="../assets/addPic2.png" class="addPic_icon" >
				<img src="../assets/back.png" class="del_icon">
			</div>
			<div>
				<mt-button type="primary">发布</mt-button>
				<mt-button type="primary">预览</mt-button>
			</div>
			
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			

		}
	}
</script>
<style>

	@import "../style/publish.css";
</style>



