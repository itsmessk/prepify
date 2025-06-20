import {interviewCovers, mappings} from "@/constants";
import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const companyIconBaseURL = "https://logo.clearbit.com";

const normalizeTechName = (tech: string) => {
  const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
  return mappings[key as keyof typeof mappings];
};

const checkIconExists = async (url: string) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok; // Returns true if the icon exists
  } catch {
    return false;
  }
};

const checkCompanyLogoExist = async (companyUrl: string) => {
  const companyLogoFetchUrl = `${companyIconBaseURL}/${companyUrl}`;
  try {
    const response = await fetch(companyLogoFetchUrl, {method: "HEAD"});
    return response.ok;
  } catch {
    return false;
  }
}

export const getCompanyLogo = (companyUrl: string) => {
  return `${companyIconBaseURL}/${companyUrl}`;
}

export const getTechLogos = async (techArray: string[]) => {
  const logoURLs = techArray.map((tech) => {
    const normalized = normalizeTechName(tech);
    return {
      tech,
      url: `${techIconBaseURL}/${normalized}/${normalized}-original.svg`,
    };
  });
  const results = await Promise.all(
      logoURLs.map(async ({ tech, url }) => ({
        tech,
        url: (await checkIconExists(url)) ? url : "/tech.svg",
      }))
  );

  return results;
};

export const getInterviewCover = async (companyUrl: string) => {
  if(await checkCompanyLogoExist(companyUrl)) {
    return getCompanyLogo(companyUrl);
  } else{
    const randomIndex = Math.floor(Math.random() * interviewCovers.length);
    return `/covers${interviewCovers[randomIndex]}`;
  }
};