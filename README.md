# Terraform Automation and Collaboration tools (TACOS) pricing calculator

We created a TACOS (Terraform Automation and Collaboration Software) pricing calculator, and wanted to share it with the community. The inspiration to build this came from [this](https://www.reddit.com/r/Terraform/comments/13jgzc5/terraform_new_pricing/) reddit thread, where users of TF cloud complained about Hashicorp’s new [resource based pricing model](https://www.hashicorp.com/products/terraform/pricing).

Here are some quotes from that thread above that sums it up:  


Here's one that speaks about how the new pricing model does not scale:  


>“I don’t think Hashicorp have thought about this at all. The page has been left extremely vague. What is incredibly stupid with this pricing model is that it doesn’t scale at all.  
>  
>With 600 managed resources across several TFC “prod” workspaces, the expected cost is $122 per year. That’s not unreasonable. But if I want to clone the “prod” workspaces to create “pre-prod”, I’ll be charged for 1200 managed resources. The expected isn’t 2x $122, but a massive $858.”  
\--  
Your assessment of the pricing scale is correct. (Replying to another user who had stated that with TF cloud, “As you get larger, you pay more on average per resource.”  
>  
>600 resources costs $122/yr — 20c per resource per year.  
>  
>1200 resources costs $858/yr — 72c per resource per year.  
>  
>1800 resources costs $1595/yr — 89c per resource per year.  
>  
>2400 resources costs $2330/yr — 97c per resource per year.  
>  
>At 2700 resources, it’s $1 per resource per year.  
>  
>Hashicorp has designed a pricing model that encourages reducing your usage with TFC. Or becoming creative in the way you use organisations and the Free tier.  
>  
>  
>  
>\- r/toorightvegemite  


Another user mentioned why they would not recommend upgrading pricing tiers and how they are looking to migrate off of Terraform Cloud.  


 

>“Generally, I do NOT recommend it! (Upgrading to the new tier)  
>  
>It does depend on individual circumstances, I guess. If you only ever expect to provision less than 500 resources at any one time ever and don’t expect you will ever grow (ever (ever)), you might be better off. For everyone else, I would avoid it if you don’t need to. There are a few more new features available as well, such as no longer being limited to 5 users, SSO, Policy Enforcement and Run Tasks.  
>  
>Do note, however, that they didn’t ever say “upgrade”…the terminology used is “Migrate”.  
>  
>Whenever I am using a product and new features don’t automatically get added but you instead need to accept/migrate to a new plan option, I always expect I am losing something very important. I recommend considering very closely what is happening here. Of course, usually the writing is on the wall at that point IMHO, and it can just be a matter of time before something like this is forced upon everyone, rather than being optional. You can just never really know…  
>  
>This is why in my circumstances, I expect I will migrate state away from Terraform Cloud completely. I don’t think it makes sense in my use case anymore.”  
>  
>  
>  
>r/GregAndo

We broadly observed the following:  


1. Pricing per hour per resource meant that TF cloud would get prohibitively expensive for organisations at scale.
2. TF cloud users are looking for alternatives to move to so that their TF bill doesn't wreak havoc.  


This got us to think, since we ourselves are building an alternative. We ended up looking at pricing of several alternatives as a result. We decided that it would be a fun project to build a calculator to see what it would cost on different platforms.  


The tools the calculator currently covers are: Digger, Spacelift (only includes Cloud tier), Env0 (only includes pro tier) and Terraform Cloud (Only includes standard tier). The pricing for all of the above tools have been taken from publicly available data on their websites. 

This is a fun project built in just a day so please be kind if there are any inadvertant mistakes! 

Check it out [here](https://tacosprice.com/)


PS: If you are building a TACO/ TF cloud alternative and want it to be added, feel free to create a PR!
