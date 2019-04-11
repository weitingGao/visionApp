<template>
	<div class="pageContent">
		<router-link to="/index">
			<img src="../assets/goback.png" class="back_icon">
		</router-link>
		<div class="coverImg" :style="{backgroundImage:'url(' + img_cover + ')'}" >
			<p class="mask"></p>
			<div class="title_box">
				<div class="label">摄影</div>
				<div class="p_title">新手上路学摄影的第一天</div>
			</div>
			<div class="author_box">
				<img src="../assets/headicon2.jpg" class="headicon">
				<div>@高伟廷 | 2019.3.10</div>
			</div>
		</div>
		<div class="contentBox">
			<div v-for="content in contents">
				<div v-if="content.type=='img'" class="img_box">
					<img :src="content.img" class="content_img">
				</div>
				<div v-else class="text_box">
					<div>{{content.text}}</div>
				</div>
			</div>
		</div>
		
		<div class="control_box">
			<div class="like_box">
				<img src="../assets/like.png" class="like_icon">
				<span>33</span>
			</div>
			<div class="comment_box">
				<img src="../assets/message.png" class="comment_icon">
				<span>33</span>
			</div>
			<div class="view_box">
				<img src="../assets/icon01.png" class="view_icon">
				<span>333</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				nowPage:'pageContent',
				img_cover:require("../assets/cs07.jpg"),
				contents:[
					{
						img:require("../assets/cs03.jpg"),
						type:"img"
					},
					{
						img:require("../assets/cs01.jpg"),
						type:"img"
					},
					{
						text:"dsuhfkldsj会计法撒旦是的罚款",
						type:"text"
					},
					{
						img:require("../assets/cs02.jpg"),
						type:"img"
					},
					{
						text:"dsuhfkldsj会计法撒旦是的罚款",
						type:"text"
					},
					{
						img:require("../assets/cs04.jpg"),
						type:"img"
					},
				]
			}
		},
		mounted:function(){
			window.scrollTo(0,0);
		},
		methods:{
			

		}
	}
</script>
<style scoped lang="scss">

 @import "../style/pageContent.scss";
</style>