"use strict";(()=>{var e={};e.id=188,e.ids=[188],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},73955:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>v,originalPathname:()=>b,patchFetch:()=>f,requestAsyncStorage:()=>m,routeModule:()=>h,serverHooks:()=>y,staticGenerationAsyncStorage:()=>g,staticGenerationBailout:()=>w});var a={};t.r(a),t.d(a,{POST:()=>l});var i=t(95419),s=t(69108),n=t(99678),o=t(78070),p=t(81355),c=t(3205),u=t(9108),d=t(11896);async function l(e,{params:r}){try{let e=await (0,p.getServerSession)(c.L);if(!e||"admin"!==e.user.role)return o.Z.json({error:"Unauthorized"},{status:401});let t=await u._.technician.update({where:{id:r.technicianId},data:{status:"approved",approvedAt:new Date,approvedById:e.user.id},include:{user:!0}});return await (0,d.C)({to:t.user.email,subject:"Application Approved - Welcome to KuiperPros!",template:"technician-approved",data:{firstName:t.firstName,loginUrl:`${process.env.NEXTAUTH_URL}/technician/login`}}),await u._.adminActivity.create({data:{adminId:e.user.id,action:"approved_technician",entityType:"technician",entityId:r.technicianId,details:{technicianName:`${t.firstName} ${t.lastName}`,companyName:t.companyName}}}),o.Z.json({success:!0,technician:t})}catch(e){return console.error("Error approving technician:",e),o.Z.json({error:"Failed to approve technician"},{status:500})}}let h=new i.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/admin/technicians/[technicianId]/approve/route",pathname:"/api/admin/technicians/[technicianId]/approve",filename:"route",bundlePath:"app/api/admin/technicians/[technicianId]/approve/route"},resolvedPagePath:"C:\\Users\\12244\\OneDrive\\Documents\\Kuiperpros\\app\\api\\admin\\technicians\\[technicianId]\\approve\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:m,staticGenerationAsyncStorage:g,serverHooks:y,headerHooks:v,staticGenerationBailout:w}=h,b="/api/admin/technicians/[technicianId]/approve/route";function f(){return(0,n.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:g})}},3205:(e,r,t)=>{t.d(r,{L:()=>n});var a=t(86485),i=t(9108),s=t(7529);let n={providers:[(0,a.Z)({name:"credentials",credentials:{email:{label:"Email",type:"email"},password:{label:"Password",type:"password"}},async authorize(e){if(!e?.email||!e?.password)return null;let r=await i._.user.findUnique({where:{email:e.email},include:{customer:!0,technician:!0}});return r&&r.passwordHash&&await s.ZP.compare(e.password,r.passwordHash)?{id:r.id,email:r.email,role:r.role,name:r.customer?.firstName||r.technician?.firstName||"User"}:null}})],callbacks:{jwt:async({token:e,user:r})=>(r&&(e.id=r.id,e.role=r.role),e),session:async({session:e,token:r})=>(e?.user&&(e.user.id=r.id,e.user.role=r.role),e)},pages:{signIn:"/login",error:"/auth/error"},session:{strategy:"jwt"}}},11896:(e,r,t)=>{t.d(r,{C:()=>n});var a=t(61584),i=t.n(a);i().setApiKey(process.env.SENDGRID_API_KEY);let s={"quote-confirmation":e=>`
    <h2>Hello ${e.firstName},</h2>
    <p>Thank you for requesting a quote for Kuiper satellite internet installation!</p>
    <p><strong>Quote ID:</strong> ${e.quoteId}</p>
    <p><strong>Service Address:</strong> ${e.address}</p>
    <p><strong>Estimated Price:</strong> $${e.estimatedPrice}</p>
    <p>We've notified available technicians in your area. You'll receive an update within 24 hours.</p>
    <p>Best regards,<br>The KuiperPros Team</p>
  `,"new-job-notification":e=>`
    <h2>Hello ${e.firstName},</h2>
    <p>A new installation opportunity is available in ${e.location}!</p>
    <p><strong>Job ID:</strong> ${e.jobId}</p>
    <p><strong>Estimated Payout:</strong> $${e.estimatedPayout}</p>
    <p>Log in to your dashboard to view details and accept this job.</p>
    <p>Best regards,<br>The KuiperPros Team</p>
  `,"technician-assigned":e=>`
    <h2>Hello ${e.firstName},</h2>
    <p>Great news! A technician has been assigned to your installation.</p>
    <p><strong>Technician:</strong> ${e.technicianName}</p>
    <p><strong>Company:</strong> ${e.companyName||"Independent Technician"}</p>
    <p>They will contact you within 24 hours to schedule your installation.</p>
    <p>Best regards,<br>The KuiperPros Team</p>
  `,"job-accepted":e=>`
    <h2>Hello ${e.firstName},</h2>
    <p>You've successfully accepted a new job!</p>
    <p><strong>Job ID:</strong> ${e.jobId}</p>
    <p><strong>Customer:</strong> ${e.customerName}</p>
    <p><strong>Address:</strong> ${e.address}</p>
    <p><strong>Your Payout:</strong> $${e.payout}</p>
    <p>Please contact the customer within 24 hours to schedule the installation.</p>
    <p>Best regards,<br>The KuiperPros Team</p>
  `,"technician-approved":e=>`
    <h2>Congratulations ${e.firstName}!</h2>
    <p>Your application to join KuiperPros has been approved!</p>
    <p>You can now log in to your dashboard and start accepting installation jobs.</p>
    <p><a href="${e.loginUrl}">Log In to Your Dashboard</a></p>
    <p>Welcome to the team!</p>
    <p>Best regards,<br>The KuiperPros Team</p>
  `};async function n({to:e,subject:r,template:t,data:a}){try{let n=s[t](a),o={to:e,from:process.env.EMAIL_FROM,subject:r,html:n};return await i().send(o),{success:!0}}catch(e){throw console.error("Email send error:",e),e}}},9108:(e,r,t)=>{t.d(r,{_:()=>i});let a=require("@prisma/client"),i=global.prisma||new a.PrismaClient}};var r=require("../../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[638,147,70,584],()=>t(73955));module.exports=a})();