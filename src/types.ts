export interface Post {
  path: string
  title: string
  date: string
  place?: string
  lang?: string
  desc?: string
  duration?: string
  recording?: string
  radio?: boolean
  video?: boolean
  inperson?: boolean
  redirect?: string
}