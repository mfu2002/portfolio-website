export default class ProjectInfo {
  title: string;
  urls: string[];
  description: string;
  tags: string[];
  lastModified: Date
  constructor(
    title: string,
    urls: string[],
    desc: string,
    tags: string[],
    lastModified: Date
  ) {
    this.title = title;
    this.urls = urls;
    this.description = desc;
    this.tags = tags;
    this.lastModified = lastModified
  }
}
