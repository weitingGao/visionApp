<template>
	<div id="header">
		<div class="header_box">
			<div class="head_left"  @click="popupVisible=true"></div>
			<div class="head_center">
				<select v-model="selected"  @change="selectedType()" >
		            <option v-for="option in options" v-bind:value="option.value"  >
		                {{option.text}}
		            </option>
		         </select>
			</div>
			<router-link to="/publish">
				<div class="head_right"></div>
			</router-link>
		</div>

		
		<mt-popup v-model="popupVisible"  position="left"  popup-transition="popup-slide-left" class="leftBox">
			<div class="popup_box">
				<div class="Info_box">
	                <img class="prople_attr" src="../assets/headicon2.jpg">
	                <div class="people_info">
	                    <div class="info_name">kosen</div>
	                    <div class="Info">
	                       <span class="degree">前端</span> <span class="company">因赛集团</span>
	                    </div>
	                </div>
	            </div>
	            <ul class="popup_Icon">
	                <router-link to="/">
	                	<li class="icon1"><img src="../assets/icon01.png"><div>个人中心</div></li>
	                </router-link>
	                <router-link to="/">
	                	<li class="icon2"><img src="../assets/icon02.png"><div>我关注的</div></li>
	                </router-link>
	                <router-link to="/">
	                	<li class="icon3"><img src="../assets/icon03.png"><div>修改资料</div></li>
	                </router-link>
	            </ul>

	             <router-link to="/">
	                	<div class="icon4"><img src="../assets/icon04.png"><div>退出登录</div></div>
	             </router-link>
			</div>
		</mt-popup>
		

	</div>
</template>
<script>
import { Popup } from 'mint-ui';

	export default {
		props:['nowPage'],
		data(){
			return{
				selected:this.nowPage ,
	            options: [
	                { text: '发现', value: 'find' },
	                { text: '关注', value: 'follow' },
	                { text: '灵感', value: 'inspiration' }
	            ],
	            popupVisible:false,
			}
		},

		methods:{
			selectedType:function(){
				
				if(this.selected=="find"){
					this.$router.push({path:'/find'});
				}else if(this.selected=="follow"){
					this.$router.push({path:'/follow'});
				}else if(this.selected=="inspiration"){
					this.$router.push({path:'/inspiration'});
				}
				// console.log(this.selected,this.nowPage);
			}

		}
	}
</script>

<style scoped>
 @import "../style/header.css";
</style>