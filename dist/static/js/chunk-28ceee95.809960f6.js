(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28ceee95"],{"1d2c":function(t,e,a){"use strict";a("c938")},"7f7c":function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"f",(function(){return o})),a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return i})),a.d(e,"e",(function(){return l})),a.d(e,"b",(function(){return c}));var r=a("b775");function n(t){return Object(r["a"])({method:"GET",url:"/items/link_operation_plan",params:t})}function o(t){return Object(r["a"])({method:"GET",url:"/items/link_operation_plan/".concat(t)})}function s(){return Object(r["a"])({method:"GET",url:"/items/link_operation_plan",params:{"aggregate[countDistinct]":"id"}})}function i(t){return Object(r["a"])({method:"POST",url:"/items/link_operation_plan",data:t})}function l(t,e){return r["a"].patch("/items/link_operation_plan/".concat(t),e)}function c(t){return Object(r["a"])({method:"DELETE",url:"/items/link_operation_plan",data:t})}},c938:function(t,e,a){},f6c6:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-container"},[a("div",{staticClass:"task-header"},[a("div",{staticClass:"task-header-left"},[a("div",{staticClass:"page-icon-close"},[a("i",{staticClass:"el-icon-close back",on:{click:t.closePage}})]),a("div",{staticClass:"page-heading-text"},[t._v("编辑")])]),a("div",{staticClass:"task-header-right"},[a("div",{staticClass:"header-right-text"},[t._v(t._s(t.$store.state.user.name))])])]),a("div",{staticClass:"task-main"},[a("el-card",{staticClass:"box-card"},[a("el-form",{ref:"form",attrs:{"label-position":"right",model:t.form,rules:t.formRules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"链接ID",prop:"link_id"}},[a("el-input",{model:{value:t.form.link_id,callback:function(e){t.$set(t.form,"link_id",e)},expression:"form.link_id"}})],1),a("el-form-item",{attrs:{label:"计划开始日期",prop:"date_start"}},[a("el-date-picker",{staticStyle:{width:"60%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.date_start,callback:function(e){t.$set(t.form,"date_start",e)},expression:"form.date_start"}})],1),a("el-form-item",{attrs:{label:"计划截至日期",prop:"date_end"}},[a("el-date-picker",{staticStyle:{width:"60%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.date_end,callback:function(e){t.$set(t.form,"date_end",e)},expression:"form.date_end"}})],1),a("el-form-item",{attrs:{label:"销售额目标",prop:"sales_target"}},[a("el-input",{attrs:{placeholder:"元"},model:{value:t.form.sales_target,callback:function(e){t.$set(t.form,"sales_target",e)},expression:"form.sales_target"}})],1),a("el-form-item",{attrs:{label:"推广预算",prop:"promotion_budget"}},[a("el-input",{attrs:{placeholder:"元"},model:{value:t.form.promotion_budget,callback:function(e){t.$set(t.form,"promotion_budget",e)},expression:"form.promotion_budget"}})],1),a("el-form-item",{attrs:{label:"利润值目标"}},[a("el-input",{attrs:{placeholder:"元"},model:{value:t.form.task_object,callback:function(e){t.$set(t.form,"task_object",e)},expression:"form.task_object"}})],1),a("el-form-item",{attrs:{label:"核心策略",prop:"strategy"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.strategy,callback:function(e){t.$set(t.form,"strategy",e)},expression:"form.strategy"}})],1),a("el-form-item",{attrs:{label:"推广方案"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.promotion_plan,callback:function(e){t.$set(t.form,"promotion_plan",e)},expression:"form.promotion_plan"}})],1),a("el-form-item",{attrs:{label:"行动计划"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.action_plan,callback:function(e){t.$set(t.form,"action_plan",e)},expression:"form.action_plan"}})],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.notes,callback:function(e){t.$set(t.form,"notes",e)},expression:"form.notes"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.handleConfirm}},[t._v("确认")])],1)],1)],1)],1)])},n=[],o=a("c7eb"),s=a("1da1"),i=(a("a9e3"),a("7f7c")),l={name:"ViewTask",data:function(){return{form:{link_id:"",date_start:"",date_end:"",sales_target:"",promotion_budget:"",task_object:"",strategy:"",promotion_plan:"",action_plan:"",notes:"",user_created:""},formRules:{link_id:[{required:!0,message:"链接ID不得为空",trigger:"blur"}],date_start:[{required:!0,trigger:"blur",message:"计划开始时间不得为空"}],date_end:[{required:!0,trigger:"blur",message:"计划截止时间不得为空"}],sales_target:[{required:!0,trigger:"blur",message:"销售目标不得为空"}],promotion_budget:[{required:!0,trigger:"blur",message:"推广预算不得为空"}],strategy:[{required:!0,trigger:"blur",message:"核心策略不得为空"}]}}},created:function(){var t=this;Object(i["f"])(this.$route.params.id).then((function(e){t.form=e.data}))},methods:{closePage:function(){this.$router.go(-1)},handleConfirm:function(){var t=this;return Object(s["a"])(Object(o["a"])().mark((function e(){var a;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.$route.params.id,t.$refs.form.validate(function(){var e=Object(s["a"])(Object(o["a"])().mark((function e(r){var n;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=5;break}return e.next=3,Object(i["e"])(Number(a),t.form);case 3:n=e.sent,n.data&&n.data.id?(t.$notify({title:"成功",message:"修改成功",type:"success"}),t.closePage()):t.$notify({title:"失败",message:"修改失败",type:"warning"});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})))()}}},c=l,u=(a("1d2c"),a("2877")),m=Object(u["a"])(c,r,n,!1,null,"f91215c8",null);e["default"]=m.exports}}]);