<template>
  <div>
    <div class="fixed full-screen back-white">
  <el-row class="text-center" type="flex" algin="middle">
    <el-col :lg="16" :md="20" :sm="22" :xs="22" class="header-warp inline-block back-white">
        <div class="logo">
          <img src="../assets/img/logo.png">
      </div>
      <div class="nav">
        <ul>
          <li v-for="item in navList">{{item}}</li>
        </ul>
      </div>
      <div class="btn-nav">
        <el-dropdown>
          <el-button type="primary">
            <i class="el-icon-menu"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item  v-for="item in navList">{{item}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
    </div>
    <router-view></router-view>
    <div class="full-screen text-center " style=" background: #222222;">
        <div class="full-screen footer-warp footer">
          <div> Copyright © 2015 greatech.com.cn All Rights Reserved    成都格理特电子技术有限公司@版权所有      地址: 成都市高新区吉泰五路88号香年广场T3-2501室</div>
          <div class="logo-footer">
            <img src="../assets/img/logo-footer.png">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
   export default {
    data() {
      name:"header"
      return {
        navList:["网站首页","新闻中心","产品中心","解决方案","关于我们"]
      };
    }}
</script>

<style>
  @import '../assets/css/header-footer.css';
  @import '../assets/css/public.css';
</style>
