<template>
	<div class="publish">
		<router-link to="/find">
			<img src="../assets/goback.png" class="back_icon">
		</router-link>
		<p class="topTitle">发布</p>
<!-- 发布内容 -->
		<div class="publish_box">
			<input type="string" name="title" class="publish_title" placeholder="点击编辑作品标题">
			<div class="publish_coverImg">
		        <img src="../assets/addPic.png" class="public_icon">
		        <input type="file" @change="getFile($event)">
		        <p>添加图片</p>
			</div>
			<div class="publish_text">
				<textarea  placeholder="点击编辑作品介绍" v-model="p_describe"></textarea>
			</div>
			<div class="publish_choose">
				<mt-radio
				  title="作品类型"
				  v-model="options.value"
				  :options="options">
				</mt-radio>
			</div>
			<p class="content_title">正文</p>
			<div class="publish_contentBox">
				<div class="publish_describe">
					<textarea  placeholder="点击编辑图片介绍" v-model="img_describe"></textarea>
				</div>
				<div class="publish_img">
					<img src="../assets/addPic.png" class="public_icon2">
			        <input type="file" @change="getFile($event)">
			        <p>添加图片</p>
				</div>
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
				<mt-button size="large" class="publish_btn">发布</mt-button>
				<!-- <mt-button type="primary">预览</mt-button> -->
			</div>
			
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				p_describe:"",
				img_describe:'',

				options:[
				  {
				    label: '摄影',
				    value: '摄影',
				  },
				  {
				    label: '绘画',
				    value: '绘画'
				  },
				  {
				    label: '写真',
				    value: '写真'
				  },
				  {
				  	label: '素描',
				    value: '素描'
				  },
				  {
				  	label: '油墨',
				    value: '油墨',
				  }
				]
			}
		},
		methods:{
			getFile:function(){

			}

		}
	}
</script>
<style scoped lang="scss">
	@import "../style/publish.scss";
</style>



