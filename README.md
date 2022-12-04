Totally customizable general template/component library for a basic showcase/portfolio site.

Single Page React-Typescript app for which all content is accounted for in the 'AppConfig' object (Interface below) which lives in the App.tsx file.

Using out of the box, required sections include Nav, Hero, Contact and Footer.

Non-required sections that are available for out of the box use include Photos and Reels as well as the generic Section component.

This app also comes with a fully wired up basic contact form that integrates seemlessly when launched with Netlify.com.
*Note: changes to this contact form must also be accounted for in the index.html file as required for netlify integration*

```
Examples of this library in use can be found at: 

anthonyjanpotter.com - https://github.com/sbronicki/ajp-site-new

sbronicki.com - https://github.com/sbronicki/my-site-new
```
```
interface config {
  nav: {
    label?: string;
    icon?: React.ReactNode;
    items: NavItem[];
    color: {
      background: string;
      text: string;
    };
  };
  hero: {
    centerCenter?: React.ReactNode | string;
    rightBottom?: React.ReactNode | string;
  };
  section?: SectionInterface[];
  photos?: {
    title: string;
    description?: string;
    photos: Batch[];
  };
  reels?: {
    title: string;
    reels: Reel[];
  };
  contact: {
    img?: {
      img: string;
      left: boolean;
    };
    title?: string;
    icon?: React.ReactNode;
    message?: string;
    fields: Field[];
  };
  footer: {
    label?: string;
    items: FooterItem[];
    color: { background: string; text: string };
  };
}
```
