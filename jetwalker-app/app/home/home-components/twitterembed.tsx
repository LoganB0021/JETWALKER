'use client'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const TwitterTimelnEmbed = (): React.JSX.Element => {
    return (
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="weremy_jeber"
        options={{height: 400}}
        />
    );
};

export default TwitterTimelnEmbed;