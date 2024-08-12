export enum SelectedPage{
  Home = "home",
  Benefits = "benefits",
  Ourclasses = "ourclasses",
  ContactUs = "contactus",
}

export type BenifitType = {
  icon: JSX.Element;
  title: string;
  description: string;
}

export type ClassType = {
  name: string;
  description?: string;
  image: string
}