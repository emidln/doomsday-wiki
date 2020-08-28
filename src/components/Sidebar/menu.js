import React from 'react';
import EyeOutlineIcon from 'mdi-react/EyeOutlineIcon';
import FileOutlineIcon from 'mdi-react/FileOutlineIcon';
import FlashIcon from 'mdi-react/FlashIcon';
import FlaskOutlineIcon from 'mdi-react/FlaskOutlineIcon';
import NewspaperIcon from 'mdi-react/NewspaperIcon';
import PuzzleIcon from 'mdi-react/PuzzleIcon';

export default {
  appendices: {
    icon: <FileOutlineIcon />,
    order: 3,
    subtitle: 'sidebar.entries.appendices.subtitle',
    title: 'sidebar.entries.appendices.title',
  },
  articles: {
    icon: <NewspaperIcon />,
    subtitle: 'sidebar.entries.articles.subtitle',
    title: 'sidebar.entries.articles.title',
  },
  ddeft: {
    icon: <FlaskOutlineIcon />,
    order: 1,
    subtitle: 'sidebar.entries.ddeft.subtitle',
    title: 'sidebar.entries.ddeft.title',
  },
  ddft: {
    icon: <FlashIcon />,
    order: 0,
    subtitle: 'sidebar.entries.ddft.subtitle',
    title: 'sidebar.entries.ddft.title',
  },
  meandeck: {
    icon: <EyeOutlineIcon />,
    order: 2,
    subtitle: 'sidebar.entries.meandeck.subtitle',
    title: 'sidebar.entries.meandeck.title',
  },
  puzzles: {
    icon: <PuzzleIcon />,
    subtitle: 'sidebar.entries.puzzles.subtitle',
    title: 'sidebar.entries.puzzles.title',
  },
};
