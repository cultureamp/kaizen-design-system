import * as OLD_ICONS from '~components/Icon'
import { IconNames } from '~components/__future__/Icon/types'
import { StringSuggestions } from '~components/types/StringSuggestions'

// `undefined` means the icon has no usage, thus is not available in the new icon set
type NewIconProps = { name: IconNames, isFilled?: boolean } | undefined

const iconMap = new Map<keyof typeof OLD_ICONS, NewIconProps>([
  ['AcademyIcon', { name: 'school' }],
  ['ActionOffIcon', undefined],
  ['ActionOffWhiteIcon', undefined],
  ['ActionOnIcon', { name: 'flash_on' }],
  ['AddIcon', { name: 'add' }],
  ['AddLinkIcon', { name: 'add_link' }],
  ['AddWhiteIcon', { name: 'add_link' }],
  ['AiIcon', { name: 'auto_awesome' }],
  ['ArchivedIcon', { name: 'assignment_returned' }],
  ['ArchivedWhiteIcon', undefined],
  ['ArrowBackwardIcon', { name: 'arrow_back' }],
  ['ArrowDownIcon', { name: 'arrow_downward' }],
  ['ArrowForwardIcon', { name: 'arrow_forward' }],
  ['ArrowLeftIcon', { name: 'arrow_back' }],
  ['ArrowRightIcon', { name: 'arrow_forward' }],
  ['ArrowUpIcon', { name: 'arrow_upward' }],
  ['AssignmentIcon', { name: 'assignment_add' }],
  ['BlankIcon', undefined],
  ['BoldIcon', { name: 'format_bold' }],
  ['BookmarkOffIcon', { name: 'bookmark' }],
  ['BookmarkOnIcon', { name: 'bookmark', isFilled: true }],
  ['BranchingIcon', { name: 'reduce_capacity' }],
  ['BullettedListIcon', { name: 'format_list_bulleted' }],
  ['CameraIcon', { name: 'add_a_photo' }],
  // "CaMonogramIcon" to shift usage to using Brand
  ['CautionIcon', { name: 'warning' }],
  ['CautionWhiteIcon', { name: 'warning' }],
  ['CheckIcon', { name: 'check' }],
  ['ChevronDownIcon', { name: 'keyboard_arrow_down' }],
  ['ChevronLeftIcon', { name: 'chevron_left' }],
  ['ChevronRightIcon', { name: 'chevron_right' }],
  ['ChevronUpIcon', { name: 'keyboard_arrow_up' }],
  ['ClearIcon', { name: 'cancel' }],
  ['ClearWhiteIcon', { name: 'cancel' }],
  ['ClosedIcon', { name: 'assignment_turned_in' }],
  ['ClosedWhiteIcon', { name: 'assignment_turned_in' }],
  ['CloseIcon', { name: 'close' }],
  ['CommentAddIcon', { name: 'add_comment' }],
  ['CommentAddWhiteIcon', undefined],
  ['CommentBankIcon', { name: 'comment_bank' }],
  ['CommentDisabledIcon', { name: 'chat_error' }],
  ['CommentDisabledWhiteIcon', undefined],
  ['CommentIcon', { name: 'sms' }],
  ['CommentWhiteIcon', undefined],
  ['CommunicationsIcon', { name: 'forum' }],
  ['CompetencyLibraryIcon', { name: 'user_attributes' }],
  ['ConfigureIcon', { name: 'build' }],
  ['ConnectIcon', { name: 'power' }],
  ['ConnectLineIcon', { name: 'power' }],
  ['CustomIcon', { name: 'brush' }],
  ['DashboardIcon', { name: 'dashboard' }],
  ['DateEndIcon', { name: 'event' }],
  ['DateEndWhiteIcon', undefined],
  ['DateRangeIcon', { name: 'date_range' }],
  ['DateRangeWhiteIcon', { name: 'date_range' }],
  ['DateStartIcon', { name: 'today' }],
  ['DateStartWhiteIcon', { name: 'today' }],
  ['DecreaseIndentIcon', { name: 'format_indent_decrease' }],
  ['DeltaBareIcon', undefined],
  ['DeltaBareWhiteIcon', undefined],
  ['DeltaFlatIcon', { name: 'horizontal_rule' }],
  ['DeltaIcon', undefined],
  ['DeltaNegativeIcon', { name: 'south_east' }],
  ['DeltaPositiveIcon', { name: 'north_east' }],
  ['DeltaWhiteIcon', undefined],
  ['DemographicsIcon', { name: 'tune' }],
  ['DepartmentIcon', { name: 'groups' }],
  ['DraftIcon', { name: 'note_alt' }],
  ['DraftWhiteIcon', { name: 'note_alt' }],
  ['DragIcon', { name: 'drag_indicator' }],
  ['DuplicateIcon', { name: 'content_copy' }],
  ['EditIcon', { name: 'edit' }],
  ['EffectivenessIcon', { name: 'potted_plant' }],
  ['EllipsisIcon', { name: 'more_horiz' }],
  ['EmailIcon', { name: 'mail' }],
  ['EmptyIcon', { name: 'radio_button_unchecked' }],
  ['EmptyWhiteIcon', { name: 'radio_button_unchecked' }],
  ['EndIcon', { name: 'keyboard_tab' }],
  ['EngagementIcon', undefined],
  ['EngagementWhiteIcon', undefined],
  ['EqualIcon', undefined],
  ['EqualWhiteIcon', undefined],
  ['ExclamationIcon', { name: 'error' }],
  ['ExclamationOctagonIcon', { name: 'warning' }],
  ['ExclamationOctagonWhiteIcon', undefined],
  ['ExclamationWhiteIcon', { name: 'error' }],
  ['ExperienceIcon', undefined],
  ['ExportIcon', { name: 'cloud_download' }],
  ['ExportWhiteIcon', { name: 'cloud_download' }],
  ['ExternalLinkIcon', { name: 'open_in_new' }],
  ['FaceDissatisfiedIcon', { name: 'sentiment_dissatisfied' }],
  ['FaceDissatisfiedWhiteIcon', undefined],
  ['FaceNeutralIcon', { name: 'sentiment_neutral' }],
  ['FaceNeutralWhiteIcon', undefined],
  ['FaceSatisfiedIcon', { name: 'sentiment_satisfied' }],
  ['FaceSatisfiedWhiteIcon', undefined],
  ['FaceVeryDissatisfiedIcon', undefined],
  ['FaceVeryDissatisfiedWhiteIcon', undefined],
  ['FaceVerySatisfiedIcon', { name: 'sentiment_very_satisfied' }],
  ['FaceVerySatisfiedWhiteIcon', undefined],
  ['FactorsIcon', undefined],
  ['FavoriteOffIcon', { name: 'favorite' }],
  ['FavoriteOnIcon', { name: 'favorite', isFilled: true }],
  ['FeedbackClassifyIcon', { name: 'reviews' }],
  ['FeedbackClassifyWhiteIcon', undefined],
  ['FeedbackCompletedIcon', undefined],
  ['FeedbackCompletedWhiteIcon', undefined],
  ['FeedbackReportIcon', { name: 'mms' }],
  ['FeedbackReportWhiteIcon', undefined],
  ['FeedbackReviewIcon', { name: 'rate_review' }],
  ['FeedbackReviewWhiteIcon', undefined],
  ['FeedbackShareIcon', { name: 'chat_paste_go' }],
  ['FeedbackShareWhiteIcon', undefined],
  ['FileIcon', { name: 'draft' }],
  ['FileWhiteIcon', { name: 'draft' }],
  ['FilterIcon', { name: 'tune' }],
  ['FlagOffIcon', { name: 'flag' }],
  ['FlagOffWhiteIcon', { name: 'flag' }],
  ['FlagOnIcon', { name: 'flag', isFilled: true }],
  ['FullIcon', { name: 'radio_button_checked' }],
  ['GridViewIcon', undefined],
  ['GuidanceIcon', { name: 'lightbulb' }],
  ['HamburgerIcon', { name: 'menu' }],
  ['HeatmapIcon', { name: 'local_fire_department' }],
  ['HeatmapWhiteIcon', undefined],
  ['HierarchyIcon', { name: 'lan' }],
  ['HomeIcon', { name: 'home' }],
  ['ImportIcon', { name: 'backup' }],
  ['ImportWhiteIcon', { name: 'backup' }],
  ['IncreaseIndentIcon', { name: 'format_indent_increase' }],
  ['IndicatorActiveIcon', { name: 'radio_button_checked' }],
  ['IndicatorInactiveIcon', { name: 'radio_button_unchecked' }],
  ['InformationIcon', { name: 'info' }],
  ['InformationWhiteIcon', { name: 'info' }],
  ['InsightIcon', { name: 'find_in_page' }],
  ['InsightsIcon', undefined],
  ['InvisibleIcon', { name: 'visibility_off' }],
  ['ItalicsIcon', { name: 'format_italic' }],
  ['KebabIcon', { name: 'more_vert' }],
  ['KioskIcon', undefined],
  ['KioskWhiteIcon', undefined],
  ['LaunchIcon', { name: 'play_circle' }],
  ['LaunchWhiteIcon', undefined],
  ['LeaderboardIcon', undefined],
  ['ListViewIcon', { name: 'list' }],
  ['LiveIcon', { name: 'sensors' }],
  ['LockIcon', { name: 'lock' }],
  ['LockWhiteIcon', undefined],
  ['LogOutIcon', { name: 'logout' }],
  ['MaximizeIcon', { name: 'open_in_full' }],
  ['MeatballsIcon', { name: 'more_horiz' }],
  ['MinimizeIcon', { name: 'close_fullscreen' }],
  ['MinusIcon', { name: 'remove' }],
  ['NavigatorIcon', undefined],
  ['NotificationIcon', { name: 'notifications_active' }],
  ['NumberedListIcon', { name: 'format_list_numbered' }],
  ['NumberedListRtlIcon', { name: 'format_list_numbered_rtl' }],
  ['OpenIcon', undefined],
  ['OpenWhiteIcon', { name: 'assignment_ind' }],
  ['OrganizationIcon', { name: 'domain' }],
  ['ParticipationIcon', { name: 'front_hand' }],
  ['ParticipationWhiteIcon', undefined],
  ['PauseIcon', { name: 'pause' }],
  ['PauseWhiteIcon', undefined],
  ['PercentageIcon', { name: 'percent' }],
  ['PermissionsIcon', { name: 'key' }],
  ['PersonIcon', undefined],
  ['PhotoUploadIcon', { name: 'add_a_photo' }],
  ['PowerIcon', { name: 'power_settings_new' }],
  ['PrintIcon', { name: 'print' }],
  ['PrintWhiteIcon', undefined],
  ['ProcessManagerIcon', { name: 'playlist_add_check' }],
  ['PromotionIcon', { name: 'grade' }],
  ['PromotionWhiteIcon', undefined],
  ['QuestionIcon', { name: 'help' }],
  ['QuestionsIcon', undefined],
  ['QuestionWhiteIcon', { name: 'help' }],
  ['RedoIcon', { name: 'redo' }],
  ['RefreshIcon', { name: 'refresh' }],
  ['RemoveLinkIcon', { name: 'link_off' }],
  ['RepeatsIcon', undefined],
  ['ReportIcon', { name: 'bar_chart' }],
  ['ReportSharingIcon', { name: 'forward' }],
  ['RestoreIcon', { name: 'history' }],
  ['SaveIcon', undefined],
  ['SearchIcon', { name: 'search' }],
  ['SearchWhiteIcon', { name: 'search' }],
  ['SecurityTipIcon', { name: 'privacy_tip' }],
  ['SendIcon', { name: 'send' }],
  ['SendRtlIcon', undefined],
  ['SettingsIcon', { name: 'settings' }],
  ['SettingsWhiteIcon', undefined],
  ['ShareIcon', { name: 'forward' }],
  ['SkipIcon', { name: 'keyboard_tab' }],
  ['SkipWhiteIcon', { name: 'keyboard_tab' }],
  ['SortAscendingIcon', { name: 'arrow_drop_up' }],
  ['SortDescendingIcon', { name: 'arrow_drop_down' }],
  // "SpinnerIcon" to be replaced with XS LoadingSpinner component
  ['StarOffIcon', { name: 'star' }],
  ['StarOnIcon', { name: 'star', isFilled: true }],
  ['StartIcon', { name: 'keyboard_tab_rtl' }],
  ['SubtractIcon', { name: 'remove' }],
  ['SubtractWhiteIcon', undefined],
  ['SuccessIcon', { name: 'check_circle' }],
  ['SuccessWhiteIcon', { name: 'check_circle' }],
  ['SupportIcon', { name: 'support' }],
  ['SurveysIcon', { name: 'assignment' }],
  ['SurveysWhiteIcon', { name: 'assignment' }],
  ['SyncIcon', { name: 'cached' }],
  ['TagIcon', { name: 'label' }],
  ['TasksIcon', undefined],
  ['TasksWhiteIcon', undefined],
  ['TemplateIcon', undefined],
  ['TemplateWhiteIcon', undefined],
  ['TextAnalyticsIcon', { name: 'chat_apps_script' }],
  ['TextAnalyticsWhiteIcon', undefined],
  ['ThumbsDownIcon', { name: 'thumb_down', isFilled: true }],
  ['ThumbsDownOffIcon', { name: 'thumb_down' }],
  ['ThumbsDownOnIcon', { name: 'thumb_down', isFilled: true }],
  ['ThumbsUpIcon', { name: 'thumb_up', isFilled: true }],
  ['ThumbsUpOffIcon', { name: 'thumb_up' }],
  ['ThumbsUpOnIcon', { name: 'thumb_up', isFilled: true }],
  ['TimeIcon', { name: 'schedule' }],
  ['TimeWhiteIcon', undefined],
  ['TranslationIcon', { name: 'translate' }],
  ['TrashIcon', { name: 'delete' }],
  ['UnattributedIcon', { name: 'psychology_alt' }],
  ['UnattributedWhiteIcon', undefined],
  ['UnderlineIcon', { name: 'format_underlined' }],
  ['UndoIcon', { name: 'undo' }],
  ['UserAddIcon', { name: 'person_add' }],
  ['UserDeleteIcon', { name: 'person_cancel' }],
  ['UserExitIcon', undefined],
  ['UserIcon', { name: 'person' }],
  ['UserSelectIcon', { name: 'person_check' }],
  ['UserSettingsIcon', { name: 'manage_accounts' }],
  ['UsersIcon', { name: 'group' }],
  ['UserUpdateIcon', undefined],
  ['VisibleIcon', { name: 'visibility' }],
  ['WritingIcon', undefined],
  ['ZoomInIcon', { name: 'zoom_in' }],
  ['ZoomOutIcon', { name: 'zoom_out' }],
])

export const getNewIconPropsFromOldIconName = (
  oldValue: StringSuggestions<keyof typeof OLD_ICONS>,
): NewIconProps => iconMap.get(oldValue as keyof typeof OLD_ICONS)
