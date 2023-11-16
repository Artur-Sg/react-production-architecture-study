/* eslint-disable max-len */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';
import { ThemeDecorator, StoreDecorator } from '../../../../config/storybook/decorators';
import { Theme } from '../../../app/providers/ThemeProvider';
import { ArticleType, ArticleBlockType } from '../../../entities/Article/model/types/article';

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  ThemeDecorator(Theme.DEFAULT),
  StoreDecorator({
    articleDetails: {
      isLoading: false,
      data: {
        id: 0,
        title: 'JS News',
        subtitle: "What's new in JS?",
        img: 'https://yt3.googleusercontent.com/jZ4GFAg-slphPlLYm7LLPm-LptG5hHp6kZdh9Wez9TEnjCK9UFsDB7modBfXTW-E8PFwpZeyFQ=s900-c-k-c0x00ffffff-no-rj',
        views: 1024,
        createdAt: '26.02.2022',
        type: [ArticleType.IT],
        blocks: [
          {
            id: '0',
            type: ArticleBlockType.CODE,
            code: 'let arr = [5,4,2,3,1] arr === arr.sort(); // true - [1, 2, 3, 4, 5] arr === arr.toSorted(); // false - [1, 2, 3, 4, 5]',
          },
          {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Listing 1. sort() versus toSorted()',
            paragraphs: [
              'toSorted(), like sort(), also accepts a single optional argument, a comparator function. For example, we could use toSorted() to create a new array in descending order, as in Listing 2.',
            ],
          },
          {
            id: '2',
            type: ArticleBlockType.IMAGE,
            title: 'Image',
            src: 'https://images.idgesg.net/images/article/2017/10/birthday-cake-candles-100739452-large.jpg?auto=webp&quality=85,70',
          },
        ],
      },
    },
  }),
];
