import {Lesson} from "./Lesson";

export interface Course {
  readonly id: number;
  description: string,
  url:  string,
  longDescription: string,
  iconUrl: string,
  courseListIcon: string,
  seqNo: number,
  comingSoon: boolean,
  isNew: boolean,
  isOngoing: boolean
  lessons: Lesson[]
}
