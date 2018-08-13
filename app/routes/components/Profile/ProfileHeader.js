import React from 'react';

import faker from 'faker';

import { 
    Badge,
    Media,
    Avatar,
    AvatarAddOn
} from './../../../components';

const ProfileHeader = () => (
    <React.Fragment>
        { /* START Header */}
        <Media className="mb-3">
            <Media left middle className="mr-3 align-self-center">
              <Avatar.Image
                size="lg"
                src="http://bs4.webkom.co/img/avatars/2.jpg"
                className="mr-2"
                addOns={[
                    <AvatarAddOn.Icon 
                        className="fa fa-circle"
                        color="white"
                        key="avatar-icon-bg"
                    />,
                    <AvatarAddOn.Icon 
                        className="fa fa-circle"
                        color="success"
                        key="avatar-icon-fg"
                    />
                ]}
            />
            </Media>
            <Media body>
                <h5 className="mb-1 mt-0">
                    <a href="/profiledetails">
                        { faker.name.firstName() } { faker.name.lastName() }
                    </a> <span className="text-muted mx-1"> / </span> Profile Edit
                </h5>
                <Badge color="primary" pill className="mr-2">Premium</Badge> 
                <span className="text-muted">Edit Your Name, Avatar, etc.</span>
            </Media>
        </Media>
        { /* END Header */}
    </React.Fragment>
)

export { ProfileHeader };