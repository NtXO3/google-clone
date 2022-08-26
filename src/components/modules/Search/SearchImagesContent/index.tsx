import * as React from 'react';
import mockData from 'response.json'

export const SearchImagesContent: React.FC<SearchImagesContentProps> = ({ type }) => {
    return (
        <div className="search__content--wrapper">
            <h1>Images</h1>
        </div>
    );
};

type SearchImagesContentProps = {
  type?: string | undefined;
};
