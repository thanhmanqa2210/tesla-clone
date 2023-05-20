import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/account.css";
function Account() {
  const navigate = useNavigate();
  const [isAccount, setIsAccount] = useState(false);
  const getCurrentUser = () => {
    if (!localStorage.getItem("user-account")) {
      setIsAccount(!isAccount);
      navigate("/login");
    } else {
      // setCurrentUser(
      //   await JSON.parse(localStorage.getItem("user-account"))
      // );
      // setIsLoad(true);
    }
  };
  useEffect(() => {
    // Cập nhập document title sử dụng browser API
    document.title = "Tesla Account";
  });
  useEffect(() => {
    getCurrentUser();
  }, [isAccount]);
  return (
    <div className="container">
      <div className="menu-left">
        <ul className="menu-left--list">
          <li className="menu-left--item">
            <Link className="menu-left--link" to="/">
              <div className="menu-left--svg">
                <svg width="17" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.89 8.576 9.004.692a.657.657 0 0 0-.929 0L1.544 7.225h-.011v.01L.193 8.577a.657.657 0 1 0 .928.93l.412-.412v7.393c0 .362.294.657.657.657h4.38a.657.657 0 0 0 .657-.657V11.45h2.628v5.037c0 .362.294.657.657.657h4.38a.657.657 0 0 0 .657-.657V9.094l.411.411a.654.654 0 0 0 .93 0 .657.657 0 0 0 0-.929Zm-2.655 7.254h-3.066v-5.037a.657.657 0 0 0-.657-.657H6.57a.657.657 0 0 0-.657.657v5.037H2.847V7.78L8.54 2.086l5.694 5.694v8.05Z"
                    fill="#5c5e62"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              Dashboard
            </Link>
          </li>
          <li className="menu-left--item">
            <Link className="menu-left--link" to="/">
              <div className="menu-left--svg">
                <svg width="16" height="17" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.527 8.468a4.234 4.234 0 1 0 0-8.468 4.234 4.234 0 0 0 0 8.468Zm0-7.057a2.826 2.826 0 0 1 2.823 2.823 2.826 2.826 0 0 1-2.823 2.823 2.826 2.826 0 0 1-2.823-2.823 2.826 2.826 0 0 1 2.823-2.823Zm7.5 13.754c-.619-3.112-3.702-5.286-7.5-5.286-3.797 0-6.881 2.174-7.5 5.286-.084.423.028.86.307 1.2.298.364.74.571 1.214.571h11.958c.474 0 .916-.207 1.214-.57.28-.34.391-.778.307-1.201Zm-1.52.36H1.547c-.058 0-.1-.029-.137-.085.397-1.998 2.481-4.15 6.116-4.15s5.72 2.152 6.102 4.18a.16.16 0 0 1-.123.055Z"
                    fill="#5c5e62"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              Profile Settings
            </Link>
          </li>
          <li className="menu-left--item">
            <Link className="menu-left--link" to="/">
              <div className="menu-left--svg">
                <svg width="19" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.246 0H2.578A2.278 2.278 0 0 0 .3 2.278v8.201a2.278 2.278 0 0 0 2.278 2.278h13.668a2.278 2.278 0 0 0 2.278-2.278V2.278A2.278 2.278 0 0 0 16.246 0Zm.91 10.479a.912.912 0 0 1-.91.91H2.578a.912.912 0 0 1-.911-.91V4.556h15.49v5.923Zm-15.49-7.29v-.911c0-.502.41-.911.912-.911h13.668c.502 0 .91.409.91.91v.912H1.667Zm1.368 6.15c0-.377.306-.683.683-.683h3.189a.684.684 0 0 1 0 1.367h-3.19a.684.684 0 0 1-.682-.683Z"
                    fill="#5c5e62"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              Payment Method
            </Link>
          </li>
          <li className="menu-left--item">
            <Link className="menu-left--link" to="/">
              <div className="menu-left--svg">
                <svg width="12" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.623 5.985H7.78a.2.2 0 0 1-.199-.2V.35A.345.345 0 0 0 7.231 0a.337.337 0 0 0-.286.155L.813 9.355a.399.399 0 0 0 .332.62h3.842c.11 0 .2.09.2.2v5.436c0 .215.174.348.35.348a.337.337 0 0 0 .286-.155l6.132-9.199a.399.399 0 0 0-.332-.62Zm-5.239 6.82V9.177a.399.399 0 0 0-.399-.399H2.636l3.748-5.623v3.628c0 .22.179.399.399.399h3.349l-3.748 5.623Z"
                    fill="#5c5e62"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              Charging
            </Link>
          </li>
          <li className="menu-left--item">
            <Link className="menu-left--link" to="/">
              <div className="menu-left--svg">
                <svg
                  width="19"
                  height="15"
                  className="svg--item"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4.688C0 2.098 2.127 0 4.75 0h9.5C16.873 0 19 2.099 19 4.688v8.671c0 .906-.744 1.641-1.663 1.641H1.663A1.652 1.652 0 0 1 0 13.36V4.687Zm4.75-3.282h9.5c1.836 0 3.325 1.47 3.325 3.282v1.406h-5.937v-.229c0-.906-.745-1.64-1.663-1.64h-.95c-.918 0-1.663.734-1.663 1.64v.229H1.425V4.687c0-1.812 1.489-3.28 3.325-3.28ZM1.425 7.5v5.86c0 .129.106.234.238.234h15.674a.236.236 0 0 0 .238-.235V7.5h-5.937v.24c0 .906-.745 1.64-1.663 1.64h-.95a1.652 1.652 0 0 1-1.663-1.64V7.5H1.425Zm7.6-1.87a.236.236 0 0 0-.237.235V7.74c0 .13.106.234.237.234h.95a.236.236 0 0 0 .237-.234V5.865a.236.236 0 0 0-.237-.234h-.95Z"
                    fill="#5c5e62"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              Loot Box
            </Link>
          </li>
          <li className="menu-left--item">
            <Link className="menu-left--link" to="/">
              <div className="menu-left--svg">
                <svg width="19" height="17" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.569 16.797h8.018c.511 0 .925-.413.925-.924V7.625l.518.518a.923.923 0 0 0 1.307 0l2.249-2.252a.925.925 0 0 0 0-1.307L14.474.471a.927.927 0 0 0-.77-.264.887.887 0 0 0-.116-.007h-1.143a.924.924 0 0 0-.776.422c-.364.562-1.185.848-2.09.848-.907 0-1.727-.286-2.091-.848A.925.925 0 0 0 6.712.2H5.569a.973.973 0 0 0-.117.007.933.933 0 0 0-.77.264L.57 4.584a.925.925 0 0 0 0 1.308l2.25 2.25a.926.926 0 0 0 1.307 0l.517-.516v8.247c0 .51.414.924.925.924Zm7.326-10.723v9.338H6.261V6.054c0-.366 0-.693-.34-.834a.924.924 0 0 0-1.007.2l-1.44 1.235-1.392-1.449L5.49 1.882a.924.924 0 0 0 .692-.23h.08c.763.842 1.985 1.406 3.316 1.406 1.331 0 2.554-.564 3.317-1.406h.08a.923.923 0 0 0 .691.23l3.414 3.324-1.398 1.449-1.441-1.234a.923.923 0 0 0-1.008-.2c-.338.14-.338.466-.338.83v.023Z"
                    fill="#5c5e62"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              Order History
            </Link>
          </li>
          <li className="menu-left--item">
            <Link className="menu-left--link" to="/">
              <div className="menu-left--svg">
                <svg width="16" height="18" xmlns="http://www.w3.org/2000/svg">
                  <g
                    stroke="#5c5e62"
                    strokeWidth={1.613}
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6.7 8.5h8M11.294 5.106 14.688 8.5l-3.394 3.394M9.5 15.7H2.643c-.631 0-1.143-.645-1.143-1.44V2.74c0-.795.512-1.44 1.143-1.44H9.5" />
                  </g>
                </svg>
              </div>
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
      <div className="menu-center">Dashboard</div>
    </div>
  );
}

export default Account;
