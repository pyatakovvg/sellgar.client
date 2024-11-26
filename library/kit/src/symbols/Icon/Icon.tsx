import React from 'react';

import cn from 'classnames';
import s from './default.module.scss';

interface IProps {
  icon:
    | 'error'
    | 'error_outline'
    | 'warning'
    | 'not_interested'
    | 'add'
    | 'clear'
    | 'block'
    | 'lock_outline'
    | 'email'
    | 'alternate_email'
    | 'content_copy'
    | 'remove'
    | 'link'
    | 'link_off'
    | 'save'
    | 'send'
    | 'now_wallpaper'
    | 'attach_file'
    | 'mode_comment'
    | 'add_comment'
    | 'insert_chart_outlined'
    | 'check'
    | 'expand_less'
    | 'expand_more'
    | 'cancel'
    | 'more'
    | 'group'
    | 'group_add'
    | 'groups'
    | 'location_city'
    | 'notifications'
    | 'notifications_none'
    | 'notifications_off'
    | 'notifications_on'
    | 'person'
    | 'person_add'
    | 'person_outline'
    | 'person_add_alt'
    | 'person_add_alt_1'
    | 'person_remove'
    | 'person_search'
    | 'people_alt'
    | 'thumb_down_alt'
    | 'thumb_up_alt'
    | 'account_box'
    | 'account_circle'
    | 'add_shopping_cart'
    | 'announcement'
    | 'bookmark'
    | 'bookmark_outline'
    | 'delete'
    | 'delete_outline'
    | 'dashboard'
    | 'done'
    | 'done_all'
    | 'done_outline'
    | 'face'
    | 'upload_file'
    | 'folder'
    | 'folder_open'
    | 'favorite'
    | 'favorite_outline'
    | 'help'
    | 'help_outline'
    | 'info'
    | 'label'
    | 'label_off'
    | 'label_important'
    | 'label_outline'
    | 'language'
    | 'copyright'
    | 'settings'
    | 'search'
    | 'thumb_down'
    | 'thumb_up'
    | 'today'
    | 'apartment'
    | 'house'
    | 'corporate_fare'
    | 'login'
    | 'logout'
    | 'monitor'
    | 'priority_high'
    | 'keyboard_control'
    | 'more_vert'
    | 'input'
    | 'dangerous'
    | 'home_filled'
    | 'arrow_drop_down'
    | 'arrow_drop_up'
    | 'arrow_left'
    | 'arrow_right'
    | 'keyboard_arrow_down'
    | 'keyboard_arrow_up'
    | 'keyboard_arrow_left'
    | 'keyboard_arrow_right'
    | 'drive_file_rename_outline';
  size?: number;
}

export const Icon: React.FC<IProps> = (props) => {
  const className = React.useMemo(() => cn(s.icon, 'icon-' + props.icon), [props.icon]);

  return <div className={className} style={{ fontSize: props.size }} />;
};