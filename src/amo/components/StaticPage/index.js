/* @flow */
import Helmet from 'react-helmet';
import * as React from 'react';

import HeadLinks from 'amo/components/HeadLinks';
import HeadMetaTags from 'amo/components/HeadMetaTags';
import Page from 'amo/components/Page';
import Card from 'ui/components/Card';

import './styles.scss';

type Props = {|
  title: string,
  metaDescription: string,
  children: React.Node,
|};

const StaticPage = (props: Props) => {
  const { title, metaDescription, children } = props;

  return (
    <Page>
      <Card className="StaticPage" header={title}>
        <Helmet>
          <title>{title}</title>
        </Helmet>

        <HeadMetaTags description={metaDescription} title={title} />

        <HeadLinks />

        <div className="StaticPage-content">{children}</div>
      </Card>
    </Page>
  );
};

export default StaticPage;
