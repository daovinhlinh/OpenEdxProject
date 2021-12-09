

export interface BannerImage {
  uri: string;
  uri_absolute: string;
}

export interface CourseImage {
  uri: string;
}

export interface CourseVideo {
  uri?: any;
}

export interface Image {
  raw: string;
  small: string;
  large: string;
}

export interface Media {
  banner_image: BannerImage;
  course_image: CourseImage;
  course_video: CourseVideo;
  image: Image;
}

export interface Course {
  block_url: string;
  effort?: string;
  end?: string;
  enrollment_start?: string;
  enrollment_end?: string;
  id: string;
  media: Media;
  name: string;
  number: string;
  org: string;
  short_description: string;
  start: Date;
  start_display: string;
  start_type: string;
  pacing: string;
  mobile_available: boolean;
  hidden: boolean;
  invitation_only: boolean;
  course_id: string;
  overview: string;
}