export const Icon = ({ iconName, fill, size }: { iconName: string, fill: string, size?: number }) => {

    return (
        <svg
            width={size ? size : 24}
            height={size ? size : 24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {iconName === "grid" &&
                <>
                    <path d="M10 4V8H14V4H10ZM16 4V8H20V4H16ZM16 10V14H20V10H16ZM16 16V20H20V16H16ZM14 20V16H10V20H14ZM8 20V16H4V20H8ZM8 14V10H4V14H8ZM8 8V4H4V8H8ZM10 14H14V10H10V14ZM4 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C2.92 22 2 21.1 2 20V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2Z" fill={fill} />
                </>
            }
            {iconName === "clock" &&
                <>
                    <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 7V12L15 15" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </>
            }
            {iconName === "plus" &&
                <>
                    <path d="M18 12.998H13V17.998C13 18.2632 12.8946 18.5176 12.7071 18.7051C12.5196 18.8926 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8926 11.2929 18.7051C11.1054 18.5176 11 18.2632 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8926 5.29289 12.7051C5.10536 12.5176 5 12.2632 5 11.998C5 11.7328 5.10536 11.4784 5.29289 11.2909C5.48043 11.1033 5.73478 10.998 6 10.998H11V5.99799C11 5.73277 11.1054 5.47842 11.2929 5.29088C11.4804 5.10334 11.7348 4.99799 12 4.99799C12.2652 4.99799 12.5196 5.10334 12.7071 5.29088C12.8946 5.47842 13 5.73277 13 5.99799V10.998H18C18.2652 10.998 18.5196 11.1033 18.7071 11.2909C18.8946 11.4784 19 11.7328 19 11.998C19 12.2632 18.8946 12.5176 18.7071 12.7051C18.5196 12.8926 18.2652 12.998 18 12.998Z" fill={fill} />
                </>
            }
            {iconName === "x" &&
                <>
                    <path d="M18.3 5.71001C18.2075 5.61731 18.0976 5.54376 17.9766 5.49358C17.8557 5.4434 17.726 5.41757 17.595 5.41757C17.464 5.41757 17.3344 5.4434 17.2134 5.49358C17.0924 5.54376 16.9825 5.61731 16.89 5.71001L12 10.59L7.11001 5.70001C7.01743 5.60743 6.90752 5.53399 6.78655 5.48388C6.66559 5.43378 6.53594 5.40799 6.40501 5.40799C6.27408 5.40799 6.14443 5.43378 6.02347 5.48388C5.9025 5.53399 5.79259 5.60743 5.70001 5.70001C5.60743 5.79259 5.53399 5.9025 5.48388 6.02347C5.43378 6.14443 5.40799 6.27408 5.40799 6.40501C5.40799 6.53594 5.43378 6.66559 5.48388 6.78655C5.53399 6.90752 5.60743 7.01743 5.70001 7.11001L10.59 12L5.70001 16.89C5.60743 16.9826 5.53399 17.0925 5.48388 17.2135C5.43378 17.3344 5.40799 17.4641 5.40799 17.595C5.40799 17.7259 5.43378 17.8556 5.48388 17.9766C5.53399 18.0975 5.60743 18.2074 5.70001 18.3C5.79259 18.3926 5.9025 18.466 6.02347 18.5161C6.14443 18.5662 6.27408 18.592 6.40501 18.592C6.53594 18.592 6.66559 18.5662 6.78655 18.5161C6.90752 18.466 7.01743 18.3926 7.11001 18.3L12 13.41L16.89 18.3C16.9826 18.3926 17.0925 18.466 17.2135 18.5161C17.3344 18.5662 17.4641 18.592 17.595 18.592C17.7259 18.592 17.8556 18.5662 17.9766 18.5161C18.0975 18.466 18.2074 18.3926 18.3 18.3C18.3926 18.2074 18.466 18.0975 18.5161 17.9766C18.5662 17.8556 18.592 17.7259 18.592 17.595C18.592 17.4641 18.5662 17.3344 18.5161 17.2135C18.466 17.0925 18.3926 16.9826 18.3 16.89L13.41 12L18.3 7.11001C18.68 6.73001 18.68 6.09001 18.3 5.71001Z" fill={fill}/>
                </>
            }
            {iconName === "arrowLeft" &&
                <>
                    <path d="M14 7L9 12L14 17" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </>
            }
            {iconName === "arrowRight" &&
                <>
                    <path d="M10 17L15 12L10 7" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </>
            }
            {iconName === "picture" &&
                <>
                    <path d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 18L15.5 13L10.5 17.5L7 14.5L3 17.5M9 11.5C9.66304 11.5 10.2989 11.2366 10.7678 10.7678C11.2366 10.2989 11.5 9.66304 11.5 9C11.5 8.33696 11.2366 7.70107 10.7678 7.23223C10.2989 6.76339 9.66304 6.5 9 6.5C8.33696 6.5 7.70107 6.76339 7.23223 7.23223C6.76339 7.70107 6.5 8.33696 6.5 9C6.5 9.66304 6.76339 10.2989 7.23223 10.7678C7.70107 11.2366 8.33696 11.5 9 11.5Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </>
            }
            {iconName === "stories" &&
                <>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 6H9C8.73478 6 8.48043 6.10536 8.29289 6.29289C8.10536 6.48043 8 6.73478 8 7V17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V7C16 6.73478 15.8946 6.48043 15.7071 6.29289C15.5196 6.10536 15.2652 6 15 6ZM9 4C8.20435 4 7.44129 4.31607 6.87868 4.87868C6.31607 5.44129 6 6.20435 6 7V17C6 17.7956 6.31607 18.5587 6.87868 19.1213C7.44129 19.6839 8.20435 20 9 20H15C15.7956 20 16.5587 19.6839 17.1213 19.1213C17.6839 18.5587 18 17.7956 18 17V7C18 6.20435 17.6839 5.44129 17.1213 4.87868C16.5587 4.31607 15.7956 4 15 4H9Z" fill={fill} />
                    <path d="M2 6C2 5.73478 2.10536 5.48043 2.29289 5.29289C2.48043 5.10536 2.73478 5 3 5C3.26522 5 3.51957 5.10536 3.70711 5.29289C3.89464 5.48043 4 5.73478 4 6V18C4 18.2652 3.89464 18.5196 3.70711 18.7071C3.51957 18.8946 3.26522 19 3 19C2.73478 19 2.48043 18.8946 2.29289 18.7071C2.10536 18.5196 2 18.2652 2 18V6ZM20 6C20 5.73478 20.1054 5.48043 20.2929 5.29289C20.4804 5.10536 20.7348 5 21 5C21.2652 5 21.5196 5.10536 21.7071 5.29289C21.8946 5.48043 22 5.73478 22 6V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19C20.7348 19 20.4804 18.8946 20.2929 18.7071C20.1054 18.5196 20 18.2652 20 18V6Z" fill={fill} />
                </>
            }
            {iconName === "vertical-dots" &&
                <>
                    <path d="M10 17C11.1046 17 12 16.1046 12 15C12 13.8954 11.1046 13 10 13C8.89543 13 8 13.8954 8 15C8 16.1046 8.89543 17 10 17Z" fill={fill} />
                    <path d="M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z" fill={fill} />
                    <path d="M10 7C11.1046 7 12 6.10457 12 5C12 3.89543 11.1046 3 10 3C8.89543 3 8 3.89543 8 5C8 6.10457 8.89543 7 10 7Z" fill={fill} />
                </>
            }
            {iconName === "edit" &&
                <>
                    <path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </>
            }
            {iconName === "delete" &&
                <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill={fill} />
            }
            {iconName === "sun" &&
                <path d="M5.64 17L4.93 17.71C4.74375 17.8974 4.63921 18.1508 4.63921 18.415C4.63921 18.6792 4.74375 18.9326 4.93 19.12C5.11736 19.3063 5.37081 19.4108 5.635 19.4108C5.89919 19.4108 6.15264 19.3063 6.34 19.12L7.05 18.41C7.21383 18.2187 7.29943 17.9726 7.28971 17.7209C7.27999 17.4693 7.17566 17.2305 6.99756 17.0524C6.81947 16.8743 6.58073 16.77 6.32905 16.7603C6.07738 16.7506 5.8313 16.8362 5.64 17ZM5 12C5 11.7348 4.89464 11.4804 4.70711 11.2929C4.51957 11.1054 4.26522 11 4 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H4C4.26522 13 4.51957 12.8946 4.70711 12.7071C4.89464 12.5196 5 12.2652 5 12ZM12 5C12.2652 5 12.5196 4.89464 12.7071 4.70711C12.8946 4.51957 13 4.26522 13 4V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V4C11 4.26522 11.1054 4.51957 11.2929 4.70711C11.4804 4.89464 11.7348 5 12 5ZM5.64 7.05C5.82626 7.23474 6.07766 7.3389 6.34 7.34C6.47161 7.34076 6.60207 7.31554 6.72391 7.26577C6.84574 7.21601 6.95656 7.14268 7.05 7.05C7.23625 6.86264 7.34079 6.60919 7.34079 6.345C7.34079 6.08081 7.23625 5.82736 7.05 5.64L6.34 4.93C6.1487 4.76617 5.90262 4.68057 5.65095 4.69029C5.39927 4.70001 5.16053 4.80434 4.98244 4.98244C4.80434 5.16053 4.70001 5.39927 4.69029 5.65095C4.68057 5.90262 4.76617 6.1487 4.93 6.34L5.64 7.05ZM17.64 7.34C17.9023 7.3389 18.1537 7.23474 18.34 7.05L19.05 6.34C19.1547 6.25035 19.2397 6.14003 19.2997 6.01597C19.3597 5.89191 19.3935 5.75677 19.3988 5.61905C19.4041 5.48133 19.3809 5.344 19.3306 5.21568C19.2804 5.08735 19.2041 4.9708 19.1066 4.87335C19.0092 4.77589 18.8926 4.69964 18.7643 4.64936C18.636 4.59909 18.4987 4.57588 18.3609 4.5812C18.2232 4.58652 18.0881 4.62025 17.964 4.68027C17.84 4.7403 17.7296 4.82532 17.64 4.93L17 5.64C16.8137 5.82736 16.7092 6.08081 16.7092 6.345C16.7092 6.60919 16.8137 6.86264 17 7.05C17.1763 7.22536 17.4116 7.32875 17.66 7.34H17.64ZM21 11H20C19.7348 11 19.4804 11.1054 19.2929 11.2929C19.1054 11.4804 19 11.7348 19 12C19 12.2652 19.1054 12.5196 19.2929 12.7071C19.4804 12.8946 19.7348 13 20 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11ZM12 19C11.7348 19 11.4804 19.1054 11.2929 19.2929C11.1054 19.4804 11 19.7348 11 20V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21V20C13 19.7348 12.8946 19.4804 12.7071 19.2929C12.5196 19.1054 12.2652 19 12 19ZM18.36 17C18.17 16.8943 17.9508 16.8534 17.7355 16.8835C17.5202 16.9136 17.3205 17.0131 17.1668 17.1668C17.0131 17.3205 16.9136 17.5202 16.8835 17.7355C16.8534 17.9508 16.8943 18.17 17 18.36L17.71 19.07C17.8974 19.2563 18.1508 19.3608 18.415 19.3608C18.6792 19.3608 18.9326 19.2563 19.12 19.07C19.3063 18.8826 19.4108 18.6292 19.4108 18.365C19.4108 18.1008 19.3063 17.8474 19.12 17.66L18.36 17ZM12 6.5C10.9122 6.5 9.84883 6.82257 8.94436 7.42692C8.03989 8.03126 7.33494 8.89025 6.91866 9.89524C6.50238 10.9002 6.39346 12.0061 6.60568 13.073C6.8179 14.1399 7.34172 15.1199 8.11091 15.8891C8.8801 16.6583 9.86011 17.1821 10.927 17.3943C11.9939 17.6065 13.0998 17.4976 14.1048 17.0813C15.1098 16.6651 15.9687 15.9601 16.5731 15.0556C17.1774 14.1512 17.5 13.0878 17.5 12C17.4974 10.5421 16.917 9.14471 15.8862 8.11383C14.8553 7.08295 13.4579 6.50264 12 6.5ZM12 15.5C11.3078 15.5 10.6311 15.2947 10.0555 14.9101C9.47993 14.5256 9.03133 13.9789 8.76642 13.3394C8.50151 12.6999 8.4322 11.9961 8.56725 11.3172C8.7023 10.6382 9.03564 10.0146 9.52513 9.52513C10.0146 9.03564 10.6382 8.7023 11.3172 8.56725C11.9961 8.4322 12.6999 8.50151 13.3394 8.76642C13.9789 9.03133 14.5256 9.47993 14.9101 10.0555C15.2947 10.6311 15.5 11.3078 15.5 12C15.5 12.9283 15.1313 13.8185 14.4749 14.4749C13.8185 15.1313 12.9283 15.5 12 15.5Z" fill={fill} />
            }
            {iconName === "moon" &&
                <path d="M12 3H12.393C11.1084 4.19371 10.2826 5.79985 10.0593 7.53923C9.83602 9.2786 10.2293 11.0412 11.1708 12.5207C12.1122 14.0002 13.5424 15.103 15.2126 15.6375C16.8829 16.1719 18.6876 16.1042 20.313 15.446C19.6878 16.9505 18.6658 18.257 17.3562 19.2263C16.0466 20.1955 14.4985 20.791 12.8769 20.9494C11.2554 21.1077 9.62129 20.823 8.14892 20.1254C6.67654 19.4279 5.42114 18.3437 4.51661 16.9886C3.61209 15.6335 3.09238 14.0583 3.01291 12.431C2.93345 10.8037 3.29721 9.1853 4.0654 7.74852C4.83359 6.31174 5.97739 5.11043 7.37479 4.27274C8.77219 3.43505 10.3708 2.9924 12 2.992V3Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            }
            {iconName === "search" &&
                <path d="M15.5 14H14.71L14.43 13.73C15.4439 12.554 16.0011 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill={fill} />
            }
        </svg>
    )
}