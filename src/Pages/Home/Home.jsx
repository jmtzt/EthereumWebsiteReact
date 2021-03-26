import React, { useState } from "react";
import "./styles.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import LanguageIcon from "@material-ui/icons/Language";
import EthIconImg from "../../static/Figures/eth-home-icon.png";
import EthMainImg from "../../static/Figures/hero.png";
import SearchIcon from "@material-ui/icons/Search";
import ReorderIcon from "@material-ui/icons/Reorder";

function Home() {
  return (
    <>
      <div className="outer-center">
        <div className="navbar-top">
          <div className="eth-img">
            <img src={EthIconImg} alt="Ethereum main image" />
          </div>
          <div className="nav-left">
            <ul className="nav-left-ul">
              <li className="nav-child">
                <div className="dropdown">
                  <button className="dropbtn">
                    <span className="nav-left-text"> Use Ethereum </span>
                    <ExpandMoreIcon className="expand" />
                  </button>
                  <div className="dropdown-content">
                    <a href="https://ethereum.org/en/wallets/">
                      Ethereum Wallets
                    </a>
                    <a href="https://ethereum.org/en/get-eth/">Get ETh</a>
                    <a href="https://ethereum.org/en/dapps/">
                      Decentralized applications (dapps)
                    </a>
                    <a href="https://ethereum.org/en/stablecoins/">
                      Stablecoins
                    </a>
                    <a href="https://ethereum.org/en/stake-eth/">Stake ETH</a>
                  </div>
                </div>
              </li>
              <li className="nav-child">
                <div className="dropdown">
                  <button className="dropbtn">
                    <span> Learn </span>
                    <ExpandMoreIcon className="expand" />
                  </button>
                  <div className="dropdown-content">
                    <a href="https://ethereum.org/en/what-is-ethereum/">
                      What is Ethereum?
                    </a>
                    <a href="https://ethereum.org/en/what-is-ether/">
                      What is ether (ETH)?
                    </a>
                    <a href="https://ethereum.org/en/learn/">
                      Guides and resources
                    </a>
                    <a href="https://ethereum.org/en/history/">
                      History of Ethereum
                    </a>
                    <a href="https://ethereum.org/en/whitepaper/">
                      Ethereum Whitepaper
                    </a>
                    <a href="https://ethereum.org/en/eth2/">Ethereum 2.0</a>
                    <a href="https://ethereum.org/en/gloassary/">
                      Ethereum Gloassary
                    </a>
                    <a href="https://ethereum.org/en/eips/">
                      Ethereum Improvement Proposals
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-child">
                <div className="dropdown">
                  <button className="dropbtn">
                    <span> Developers </span>
                    <ExpandMoreIcon className="expand" />
                  </button>
                  <div className="dropdown-content">
                    <a href="https://ethereum.org/en/developers/">
                      Developers' Home
                    </a>
                    <a href="https://ethereum.org/en/whitepaper/">
                      Documentation
                    </a>
                    <a href="https://ethereum.org/en/developers/docs/">
                      Tutorials
                    </a>
                    <a href="https://ethereum.org/en/developers/learning-tools/">
                      Learn by coding
                    </a>
                    <a href="https://ethereum.org/en/developers/local-environment/">
                      Set up local environment
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-child">
                <div className="dropdown">
                  <button className="dropbtn">
                    <span> Enterprise </span>
                    <ExpandMoreIcon className="expand" />
                  </button>
                  <div className="dropdown-content">
                    <a href="https://ethereum.org/en/enterprise/">
                      Mainnet Ethereum
                    </a>
                    <a href="https://ethereum.org/en/enterprise/private-ethereum/">
                      Private Ethereum
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-child">
                <div className="dropdown">
                  <button className="dropbtn">
                    <a
                      href="https://ethereum.org/en/community/"
                      className="community-button"
                    >
                      Community
                    </a>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <div className="nav-right-smartphone">
              <SearchIcon className="show-icon" id="searchIconMobile" />
              <ReorderIcon className="show-icon" id="reorderIconMobile" />
            </div>

            <div className="nav-right-container">
              <div className="search-div ">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                />
                <SearchIcon className="search-icon" />
              </div>
              <WbSunnyIcon className="nav-child-right" />
              <div className="language-container nav-child-right">
                <LanguageIcon />

                <span>Languages</span>
              </div>
            </div>
          </div>
        </div>
        <div className="main-img-div">
          <img
            className="main-img"
            src={EthMainImg}
            alt="Ethereum main image"
          />
        </div>
        <div className="info-div">
          <div className="ethereum-text">
            <span className="ethereum-translate">Ethereum</span>
          </div>
          <div className="welcome-div">
            <h1 className="welcome-header">Welcome to ethereum</h1>

            <p className="welcome-text">
              Ethereum is the community-run technology powering the
              cryptocurrency, ether (ETH) and thousands of decentralized
              applications.
            </p>

            <form
              action="https://ethereum.org/en/what-is-ethereum/"
              method="GET"
            >
              <button className="explore-btn">Explore Ethereum</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
