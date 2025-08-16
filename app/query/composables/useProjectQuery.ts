import { fetchProject, fetchProjects } from "../projectQuery";

const PROJECT_QUERY = "project";

export function getFetchProjectsKey() {
  return [PROJECT_QUERY].join(":");
}

export function useFetchProjects() {
  return useAsyncData(getFetchProjectsKey(), fetchProjects);
}

export function getFetchProjectKey(slug: string) {
  return computed(() => [PROJECT_QUERY, slug].join(":"));
}

export function useFetchProject(slug: string) {
  return useAsyncData(getFetchProjectKey(slug), () => fetchProject(slug));
}
