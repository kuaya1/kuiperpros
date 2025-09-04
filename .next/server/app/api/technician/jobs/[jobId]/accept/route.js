"use strict";(()=>{var e={};e.id=299,e.ids=[299],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},21568:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>q,originalPathname:()=>w,patchFetch:()=>y,requestAsyncStorage:()=>m,routeModule:()=>h,serverHooks:()=>b,staticGenerationAsyncStorage:()=>g,staticGenerationBailout:()=>j});var a={};r.r(a),r.d(a,{POST:()=>l});var s=r(95419),o=r(69108),i=r(99678),n=r(78070),c=r(81355),u=r(3205),p=r(9108),d=r(11896);async function l(e,{params:t}){try{let e=await (0,c.getServerSession)(u.L);if(!e||"technician"!==e.user.role)return n.Z.json({error:"Unauthorized"},{status:401});let r=await p._.technician.findUnique({where:{userId:e.user.id}});if(!r||"approved"!==r.status)return n.Z.json({error:"Technician not approved"},{status:403});let a=await p._.$transaction(async e=>{var a;let s=await e.job.findUnique({where:{id:t.jobId},include:{quoteRequest:!0}});if(!s||"available"!==s.status)throw Error("Job is no longer available");let o=await e.job.update({where:{id:t.jobId},data:{technicianId:r.id,status:"assigned",assignedAt:new Date,technicianPayout:(a=s.customerPrice,Math.floor(.7*Number(a)))}});return await e.quoteRequest.update({where:{id:s.quoteRequestId},data:{status:"assigned",assignedTechnicianId:r.id,assignedAt:new Date}}),{job:o,quoteRequest:s.quoteRequest}});return await (0,d.C)({to:a.quoteRequest.contactEmail,subject:"Technician Assigned - KuiperPros",template:"technician-assigned",data:{firstName:a.quoteRequest.contactFirstName,technicianName:`${r.firstName} ${r.lastName}`,companyName:r.companyName}}),await (0,d.C)({to:e.user.email,subject:"Job Accepted - KuiperPros",template:"job-accepted",data:{firstName:r.firstName,jobId:t.jobId,customerName:`${a.quoteRequest.contactFirstName} ${a.quoteRequest.contactLastName}`,address:`${a.quoteRequest.serviceStreetAddress}, ${a.quoteRequest.serviceCity}, ${a.quoteRequest.serviceState}`,payout:a.job.technicianPayout}}),n.Z.json({success:!0,job:a.job})}catch(e){return console.error("Error accepting job:",e),n.Z.json({error:e.message||"Failed to accept job"},{status:500})}}let h=new s.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/technician/jobs/[jobId]/accept/route",pathname:"/api/technician/jobs/[jobId]/accept",filename:"route",bundlePath:"app/api/technician/jobs/[jobId]/accept/route"},resolvedPagePath:"C:\\Users\\12244\\OneDrive\\Documents\\Kuiperpros\\app\\api\\technician\\jobs\\[jobId]\\accept\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:m,staticGenerationAsyncStorage:g,serverHooks:b,headerHooks:q,staticGenerationBailout:j}=h,w="/api/technician/jobs/[jobId]/accept/route";function y(){return(0,i.patchFetch)({serverHooks:b,staticGenerationAsyncStorage:g})}},3205:(e,t,r)=>{r.d(t,{L:()=>i});var a=r(86485),s=r(9108),o=r(7529);let i={providers:[(0,a.Z)({name:"credentials",credentials:{email:{label:"Email",type:"email"},password:{label:"Password",type:"password"}},async authorize(e){if(!e?.email||!e?.password)return null;let t=await s._.user.findUnique({where:{email:e.email},include:{customer:!0,technician:!0}});return t&&t.passwordHash&&await o.ZP.compare(e.password,t.passwordHash)?{id:t.id,email:t.email,role:t.role,name:t.customer?.firstName||t.technician?.firstName||"User"}:null}})],callbacks:{jwt:async({token:e,user:t})=>(t&&(e.id=t.id,e.role=t.role),e),session:async({session:e,token:t})=>(e?.user&&(e.user.id=t.id,e.user.role=t.role),e)},pages:{signIn:"/login",error:"/auth/error"},session:{strategy:"jwt"}}},11896:(e,t,r)=>{r.d(t,{C:()=>i});var a=r(61584),s=r.n(a);s().setApiKey(process.env.SENDGRID_API_KEY);let o={"quote-confirmation":e=>`
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
  `};async function i({to:e,subject:t,template:r,data:a}){try{let i=o[r](a),n={to:e,from:process.env.EMAIL_FROM,subject:t,html:i};return await s().send(n),{success:!0}}catch(e){throw console.error("Email send error:",e),e}}},9108:(e,t,r)=>{r.d(t,{_:()=>s});let a=require("@prisma/client"),s=global.prisma||new a.PrismaClient}};var t=require("../../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,147,70,584],()=>r(21568));module.exports=a})();