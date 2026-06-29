import { b as attr, e as escape_html, ac as ensure_array_like } from "../../../chunks/index.js";
import { p as portfolio } from "../../../chunks/portfolio.js";
import { p as profilePhoto } from "../../../chunks/profile.js";
function getResumeView() {
  return {
    personal: portfolio.personal,
    summary: portfolio.about.resumeSummary,
    coreSkills: portfolio.resumeCoreSkills,
    techStackCategories: portfolio.techStack.categories.map((category) => ({
      ...category,
      items: category.items.map((item) => {
        if (item === "Google Sheets API") return "Google Sheets";
        if (item === "Slack Webhook") return "Slack";
        return item;
      })
    })),
    workExperience: portfolio.workExperience,
    projects: portfolio.projects,
    education: portfolio.education
  };
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const resume = getResumeView();
    $$renderer2.push(`<header class="flex items-start gap-4 mb-4 pb-3 border-b-2 border-sky-500"><img${attr("src", profilePhoto)}${attr("alt", resume.personal.name)} class="w-20 h-20 rounded-full object-cover border-2 border-sky-500 shrink-0"/> <div class="flex-1"><h1 class="text-2xl font-bold mb-1">${escape_html(resume.personal.name.toUpperCase())}</h1> <div class="text-xs text-slate-700 mb-1"><!--[-->`);
    const each_array = ensure_array_like(resume.personal.emails);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let email = each_array[i];
      if (i > 0) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<span class="mx-2">|</span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <span>📧 ${escape_html(email)}</span>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="text-xs flex flex-wrap gap-2"><a${attr("href", resume.personal.portfolioUrl)} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">🌐 Portfolio: yob-yob.com</a> <span class="text-slate-600">|</span> <a${attr("href", resume.personal.githubUrl)} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">🐙 GitHub: github.com/yob-yob</a></div></div></header> <section class="mb-3"><h2 class="text-sm font-bold uppercase border-b-2 border-emerald-500 pb-1 mb-2">Professional Summary</h2> <p class="compact-text text-justify">${escape_html(resume.summary)}</p></section> <div class="section-divider"></div> <div class="grid grid-cols-3 gap-x-4"><div class="col-span-1"><section class="mb-3"><h2 class="text-sm font-bold uppercase border-b-2 border-violet-500 pb-1 mb-2">Core Skills</h2> <ul class="compact-list"><!--[-->`);
    const each_array_1 = ensure_array_like(resume.coreSkills);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let skill = each_array_1[$$index_1];
      $$renderer2.push(`<li>${escape_html(skill)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul></section> <section class="mb-3"><h2 class="text-sm font-bold uppercase border-b-2 border-amber-500 pb-1 mb-2">Technical Expertise</h2> <div class="compact-text"><!--[-->`);
    const each_array_2 = ensure_array_like(resume.techStackCategories);
    for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
      let category = each_array_2[$$index_3];
      $$renderer2.push(`<div class="mb-1"><strong class="text-xs">${escape_html(category.name)}:</strong><br/> <!--[-->`);
      const each_array_3 = ensure_array_like(category.items);
      for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
        let item = each_array_3[$$index_2];
        $$renderer2.push(`<span class="tech-pill">${escape_html(item)}</span>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></section></div> <div class="col-span-2"><section class="mb-3"><h2 class="text-sm font-bold uppercase border-b-2 border-cyan-500 pb-1 mb-2">Work Experience</h2> <!--[-->`);
    const each_array_4 = ensure_array_like(resume.workExperience);
    for (let $$index_5 = 0, $$length = each_array_4.length; $$index_5 < $$length; $$index_5++) {
      let job = each_array_4[$$index_5];
      $$renderer2.push(`<div class="mb-2"><div class="flex justify-between mb-1 items-center"><div><h3 class="compact-heading">${escape_html(job.title)}</h3> <p class="compact-text text-slate-700">${escape_html(job.company)} · ${escape_html(job.employmentType)}</p></div> <p class="compact-text text-slate-600">${escape_html(job.resumeDateRange)}</p></div> `);
      if (job.resumeSummary) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="compact-text text-slate-600">${escape_html(job.resumeSummary)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<p class="compact-text text-slate-600 mb-1">${escape_html(job.location)}</p>`);
      }
      $$renderer2.push(`<!--]--> `);
      if (job.resumeResponsibilities?.length) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<ul class="compact-list"><!--[-->`);
        const each_array_5 = ensure_array_like(job.resumeResponsibilities);
        for (let $$index_4 = 0, $$length2 = each_array_5.length; $$index_4 < $$length2; $$index_4++) {
          let item = each_array_5[$$index_4];
          $$renderer2.push(`<li>${escape_html(item)}</li>`);
        }
        $$renderer2.push(`<!--]--></ul>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (job.resumeTechStack) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="compact-text mt-1 text-slate-600"><strong>Tech:</strong> ${escape_html(job.resumeTechStack)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></section> <div class="section-divider"></div> <section class="mb-3"><h2 class="text-sm font-bold uppercase border-b-2 border-pink-500 pb-1 mb-2">Notable Projects</h2> <!--[-->`);
    const each_array_6 = ensure_array_like(resume.projects);
    for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
      let project = each_array_6[$$index_6];
      $$renderer2.push(`<div class="mb-1"><h3 class="compact-heading">${escape_html(project.name)}</h3> <p class="compact-text">${escape_html(project.resumeDescription)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></section> <div class="section-divider"></div> <section class="mb-3"><h2 class="text-sm font-bold uppercase border-b-2 border-emerald-500 pb-1 mb-2">Education</h2> <!--[-->`);
    const each_array_7 = ensure_array_like(resume.education);
    for (let $$index_7 = 0, $$length = each_array_7.length; $$index_7 < $$length; $$index_7++) {
      let school = each_array_7[$$index_7];
      $$renderer2.push(`<div class="mb-1"><div class="flex justify-between items-start mb-1"><div><h3 class="compact-heading">${escape_html(school.degree)}</h3> <p class="compact-text text-slate-700">${escape_html(school.institution)}</p></div> <p class="compact-text text-slate-600">${escape_html(school.yearRange)}</p></div> <p class="compact-text text-slate-600">${escape_html(school.address)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></section></div></div>`);
  });
}
export {
  _page as default
};
