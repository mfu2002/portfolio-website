export default class ProjectInfo {
  id: string;
  title: string;
  urls: string[];
  description: string;
  tags: string[];
  constructor(
    id: string,
    title: string,
    urls: string[],
    desc: string,
    tags: string[]
  ) {
    this.id = id;
    this.title = title;
    this.urls = urls;
    this.description = desc;
    this.tags = tags;
  }
}
