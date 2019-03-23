<template>
	<div class="find">
		<header-box v-bind:nowPage="nowPage"></header-box>
		<div class="findBox">
			<ul>
                <li v-for="(findContain,index) in findContains" @click="read(index)">
                    <div class="cts">
                        <div class="pic_box" v-bind:style="{backgroundImage:'url(' + findContain.img_cover + ')'}">
                        	<div class="label">{{findContain.label}}</div>
		                    <div class="find_authod">
		                        <p>by  {{findContain.username}} | {{findContain.publicTime}}</p>
		                    </div>
                        </div>
                        <div class="info_box">
                        	<p class="title"> {{findContain.p_title}}</p>
                        	<p class="subTitle">{{findContain.p_describe}}</p>
                        </div>
                        
                    </div>
                </li>
            </ul>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				nowPage:'find',
				findContains:[
					{
						username:'高伟廷',
						label:'摄影',
						publicTime:'2019.3.13',
						img_cover:'../assets/cs01.jpg',
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name jenny'
					},
					{
						username:'高伟廷',
						label:'摄影',
						publicTime:'2019.3.13',
						img_cover:'../assets/cs01.jpg',
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name jenny'
					},
					{
						username:'高伟廷',
						label:'摄影',
						publicTime:'2019.3.13',
						img_cover:'../assets/cs01.jpg',
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name jenny'
					},
					{
						username:'高伟廷',
						label:'摄影',
						publicTime:'2019.3.13',
						img_cover:'../assets/cs01.jpg',
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name jenny'
					},

				]
			}
		},
		methods:{
			read:function(i){
				console.log(i)
			}

		}
	}
</script>
<style>
	@import "../style/find.css";
</style>




