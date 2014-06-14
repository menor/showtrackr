




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>tvshow-tracker/public/vendor/angular-resource.js at master · sahat/tvshow-tracker</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="sahat/tvshow-tracker" name="twitter:title" /><meta content="tvshow-tracker - Work in Progress: AngularJS + Node + Gulp + Mongoose + Passport Authentication + TVDB API" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/544954?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/544954?s=400" property="og:image" /><meta content="sahat/tvshow-tracker" property="og:title" /><meta content="https://github.com/sahat/tvshow-tracker" property="og:url" /><meta content="tvshow-tracker - Work in Progress: AngularJS + Node + Gulp + Mongoose + Passport Authentication + TVDB API" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="547F2050:4109:68ECAF:539BFFDE" name="octolytics-dimension-request_id" /><meta content="1360794" name="octolytics-actor-id" /><meta content="menor" name="octolytics-actor-login" /><meta content="bd97bf900b96245da1ed518d5799ca1d4810ca3ad080c301613a6e5eece9c83f" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="1OZWmwP+iX1cjaBDhXD1xH+1SjRZifHU0YlYPf+LRmnUdZ9bRqNIVG+2fKISWX2c+6++onudHEA0it4HyCctqA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-947f3b2fd0b84c13ecc4244435f75bfed024bbe1.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-86c2efc9edae70ed18c76b856d22e0b7eead05f1.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="a14101df690a9b7064272350e321873d">

      
  <meta name="description" content="tvshow-tracker - Work in Progress: AngularJS + Node + Gulp + Mongoose + Passport Authentication + TVDB API" />

  <meta content="544954" name="octolytics-dimension-user_id" /><meta content="sahat" name="octolytics-dimension-user_login" /><meta content="19387194" name="octolytics-dimension-repository_id" /><meta content="sahat/tvshow-tracker" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="19387194" name="octolytics-dimension-repository_network_root_id" /><meta content="sahat/tvshow-tracker" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/sahat/tvshow-tracker/commits/master.atom" rel="alternate" title="Recent Commits to tvshow-tracker:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="menor"
      data-repo="sahat/tvshow-tracker"
      data-branch="master"
      data-sha="c3a517028ab56a11c76381fbd96c238988a7a104"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="sahat/tvshow-tracker" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/menor" class="name">
        <img alt="José Menor" class=" js-avatar" data-user="1360794" height="20" src="https://avatars1.githubusercontent.com/u/1360794?s=140" width="20" /> menor
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-sign-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="sahat/tvshow-tracker">This repository</span>
    </li>
      <li>
        <a href="/sahat/tvshow-tracker/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="DcSkP54K0SEZpgNHYbWam1kSZEabtas/wMBy24l7EUaqE/VY2gJW1vsr/RcVS1MBEL2rx1aBCbR6kv3Zl9enrw==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="19387194" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/sahat/tvshow-tracker/watchers">
        8
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-x js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/sahat/tvshow-tracker/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="ekYUNHBUv9n7+14u+g5Bk4nWZS+bdZ7OZDFP7jJgcaMCFP+jCZDOI28oiKG5lvVQKlouKVd5HMZydDPcI/X27g==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar sahat/tvshow-tracker">
        <span class="octicon octicon-star"></span><span class="text">Unstar</span>
      </button>
        <a class="social-count js-social-count" href="/sahat/tvshow-tracker/stargazers">
          91
        </a>
</form>
    <form accept-charset="UTF-8" action="/sahat/tvshow-tracker/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="HwR/OZ38+IFCMqQA/laDtFH9kb0wQXcDaWJFum7zY3gCMWTARl2nWR3xKFJyyLJJWqs4h8Qtt8uW+T4+1kX9BA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star sahat/tvshow-tracker">
        <span class="octicon octicon-star"></span><span class="text">Star</span>
      </button>
        <a class="social-count js-social-count" href="/sahat/tvshow-tracker/stargazers">
          91
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/sahat/tvshow-tracker/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of sahat/tvshow-tracker to your account" aria-label="Fork your own copy of sahat/tvshow-tracker to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span><span class="text">Fork</span>
          </a>
          <a href="/sahat/tvshow-tracker/network" class="social-count">23</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/sahat" class="url fn" itemprop="url" rel="author"><span itemprop="title">sahat</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/sahat/tvshow-tracker" class="js-current-repository js-repo-home-link">tvshow-tracker</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/sahat/tvshow-tracker" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /sahat/tvshow-tracker">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/sahat/tvshow-tracker/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /sahat/tvshow-tracker/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/sahat/tvshow-tracker/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /sahat/tvshow-tracker/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/sahat/tvshow-tracker/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /sahat/tvshow-tracker/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/sahat/tvshow-tracker/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /sahat/tvshow-tracker/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/sahat/tvshow-tracker/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /sahat/tvshow-tracker/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/sahat/tvshow-tracker.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/sahat/tvshow-tracker.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:sahat/tvshow-tracker.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:sahat/tvshow-tracker.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/sahat/tvshow-tracker" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/sahat/tvshow-tracker" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/sahat/tvshow-tracker" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save sahat/tvshow-tracker to your computer and use it in GitHub Desktop." aria-label="Save sahat/tvshow-tracker to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/sahat/tvshow-tracker/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download sahat/tvshow-tracker as a zip file"
                   title="Download sahat/tvshow-tracker as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/sahat/tvshow-tracker/blob/2f3421432707a52b81a36a7eb0f946074547767a/public/vendor/angular-resource.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:9578f85e7f7962aff26056bf776e9508 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/sahat/tvshow-tracker/blob/master/public/vendor/angular-resource.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/sahat/tvshow-tracker/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="public/vendor/angular-resource.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/sahat/tvshow-tracker" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">tvshow-tracker</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/sahat/tvshow-tracker/tree/master/public" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">public</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/sahat/tvshow-tracker/tree/master/public/vendor" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">vendor</span></a></span><span class="separator"> / </span><strong class="final-path">angular-resource.js</strong>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/sahat/tvshow-tracker/contributors/master/public/vendor/angular-resource.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>611 lines (552 sloc)</span>
          <span class="meta-divider"></span>
        <span>23.859 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/sahat/tvshow-tracker?branch=master&amp;filepath=public%2Fvendor%2Fangular-resource.js"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/sahat/tvshow-tracker/edit/master/public/vendor/angular-resource.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/sahat/tvshow-tracker/raw/master/public/vendor/angular-resource.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/sahat/tvshow-tracker/blame/master/public/vendor/angular-resource.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/sahat/tvshow-tracker/commits/master/public/vendor/angular-resource.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/sahat/tvshow-tracker/delete/master/public/vendor/angular-resource.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * @license AngularJS v1.2.17-build.154+sha.ca273fd</span></div><div class='line' id='LC3'><span class="cm"> * (c) 2010-2014 Google, Inc. http://angularjs.org</span></div><div class='line' id='LC4'><span class="cm"> * License: MIT</span></div><div class='line' id='LC5'><span class="cm"> */</span></div><div class='line' id='LC6'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="nx">angular</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span><span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="kd">var</span> <span class="nx">$resourceMinErr</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">$$minErr</span><span class="p">(</span><span class="s1">&#39;$resource&#39;</span><span class="p">);</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="c1">// Helper functions and regex to lookup a dotted path on an object</span></div><div class='line' id='LC11'><span class="c1">// stopping at undefined/null.  The path must be composed of ASCII</span></div><div class='line' id='LC12'><span class="c1">// identifiers (just like $parse)</span></div><div class='line' id='LC13'><span class="kd">var</span> <span class="nx">MEMBER_NAME_REGEX</span> <span class="o">=</span> <span class="sr">/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/</span><span class="p">;</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'><span class="kd">function</span> <span class="nx">isValidDottedPath</span><span class="p">(</span><span class="nx">path</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC16'>&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">path</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">path</span> <span class="o">!==</span> <span class="s1">&#39;&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">path</span> <span class="o">!==</span> <span class="s1">&#39;hasOwnProperty&#39;</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">MEMBER_NAME_REGEX</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="s1">&#39;.&#39;</span> <span class="o">+</span> <span class="nx">path</span><span class="p">));</span></div><div class='line' id='LC18'><span class="p">}</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'><span class="kd">function</span> <span class="nx">lookupDottedPath</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">path</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC21'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isValidDottedPath</span><span class="p">(</span><span class="nx">path</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">$resourceMinErr</span><span class="p">(</span><span class="s1">&#39;badmember&#39;</span><span class="p">,</span> <span class="s1">&#39;Dotted member path &quot;@{0}&quot; is invalid.&#39;</span><span class="p">,</span> <span class="nx">path</span><span class="p">);</span></div><div class='line' id='LC23'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC24'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">path</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;.&#39;</span><span class="p">);</span></div><div class='line' id='LC25'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">ii</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">ii</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span> <span class="o">=</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="o">?</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">:</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC28'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC29'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC30'><span class="p">}</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'><span class="cm">/**</span></div><div class='line' id='LC33'><span class="cm"> * Create a shallow copy of an object and clear other fields from the destination</span></div><div class='line' id='LC34'><span class="cm"> */</span></div><div class='line' id='LC35'><span class="kd">function</span> <span class="nx">shallowClearAndCopy</span><span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="nx">dst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC36'>&nbsp;&nbsp;<span class="nx">dst</span> <span class="o">=</span> <span class="nx">dst</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">dst</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">){</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">dst</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC40'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">src</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">src</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">(</span><span class="nx">key</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;$&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">key</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;$&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dst</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">src</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">dst</span><span class="p">;</span></div><div class='line' id='LC49'><span class="p">}</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'><span class="cm">/**</span></div><div class='line' id='LC52'><span class="cm"> * @ngdoc module</span></div><div class='line' id='LC53'><span class="cm"> * @name ngResource</span></div><div class='line' id='LC54'><span class="cm"> * @description</span></div><div class='line' id='LC55'><span class="cm"> *</span></div><div class='line' id='LC56'><span class="cm"> * # ngResource</span></div><div class='line' id='LC57'><span class="cm"> *</span></div><div class='line' id='LC58'><span class="cm"> * The `ngResource` module provides interaction support with RESTful services</span></div><div class='line' id='LC59'><span class="cm"> * via the $resource service.</span></div><div class='line' id='LC60'><span class="cm"> *</span></div><div class='line' id='LC61'><span class="cm"> *</span></div><div class='line' id='LC62'><span class="cm"> * &lt;div doc-module-components=&quot;ngResource&quot;&gt;&lt;/div&gt;</span></div><div class='line' id='LC63'><span class="cm"> *</span></div><div class='line' id='LC64'><span class="cm"> * See {@link ngResource.$resource `$resource`} for usage.</span></div><div class='line' id='LC65'><span class="cm"> */</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'><span class="cm">/**</span></div><div class='line' id='LC68'><span class="cm"> * @ngdoc service</span></div><div class='line' id='LC69'><span class="cm"> * @name $resource</span></div><div class='line' id='LC70'><span class="cm"> * @requires $http</span></div><div class='line' id='LC71'><span class="cm"> *</span></div><div class='line' id='LC72'><span class="cm"> * @description</span></div><div class='line' id='LC73'><span class="cm"> * A factory which creates a resource object that lets you interact with</span></div><div class='line' id='LC74'><span class="cm"> * [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) server-side data sources.</span></div><div class='line' id='LC75'><span class="cm"> *</span></div><div class='line' id='LC76'><span class="cm"> * The returned resource object has action methods which provide high-level behaviors without</span></div><div class='line' id='LC77'><span class="cm"> * the need to interact with the low level {@link ng.$http $http} service.</span></div><div class='line' id='LC78'><span class="cm"> *</span></div><div class='line' id='LC79'><span class="cm"> * Requires the {@link ngResource `ngResource`} module to be installed.</span></div><div class='line' id='LC80'><span class="cm"> *</span></div><div class='line' id='LC81'><span class="cm"> * @param {string} url A parametrized URL template with parameters prefixed by `:` as in</span></div><div class='line' id='LC82'><span class="cm"> *   `/user/:username`. If you are using a URL with a port number (e.g.</span></div><div class='line' id='LC83'><span class="cm"> *   `http://example.com:8080/api`), it will be respected.</span></div><div class='line' id='LC84'><span class="cm"> *</span></div><div class='line' id='LC85'><span class="cm"> *   If you are using a url with a suffix, just add the suffix, like this:</span></div><div class='line' id='LC86'><span class="cm"> *   `$resource(&#39;http://example.com/resource.json&#39;)` or `$resource(&#39;http://example.com/:id.json&#39;)`</span></div><div class='line' id='LC87'><span class="cm"> *   or even `$resource(&#39;http://example.com/resource/:resource_id.:format&#39;)`</span></div><div class='line' id='LC88'><span class="cm"> *   If the parameter before the suffix is empty, :resource_id in this case, then the `/.` will be</span></div><div class='line' id='LC89'><span class="cm"> *   collapsed down to a single `.`.  If you need this sequence to appear and not collapse then you</span></div><div class='line' id='LC90'><span class="cm"> *   can escape it with `/\.`.</span></div><div class='line' id='LC91'><span class="cm"> *</span></div><div class='line' id='LC92'><span class="cm"> * @param {Object=} paramDefaults Default values for `url` parameters. These can be overridden in</span></div><div class='line' id='LC93'><span class="cm"> *   `actions` methods. If any of the parameter value is a function, it will be executed every time</span></div><div class='line' id='LC94'><span class="cm"> *   when a param value needs to be obtained for a request (unless the param was overridden).</span></div><div class='line' id='LC95'><span class="cm"> *</span></div><div class='line' id='LC96'><span class="cm"> *   Each key value in the parameter object is first bound to url template if present and then any</span></div><div class='line' id='LC97'><span class="cm"> *   excess keys are appended to the url search query after the `?`.</span></div><div class='line' id='LC98'><span class="cm"> *</span></div><div class='line' id='LC99'><span class="cm"> *   Given a template `/path/:verb` and parameter `{verb:&#39;greet&#39;, salutation:&#39;Hello&#39;}` results in</span></div><div class='line' id='LC100'><span class="cm"> *   URL `/path/greet?salutation=Hello`.</span></div><div class='line' id='LC101'><span class="cm"> *</span></div><div class='line' id='LC102'><span class="cm"> *   If the parameter value is prefixed with `@` then the value of that parameter is extracted from</span></div><div class='line' id='LC103'><span class="cm"> *   the data object (useful for non-GET operations).</span></div><div class='line' id='LC104'><span class="cm"> *</span></div><div class='line' id='LC105'><span class="cm"> * @param {Object.&lt;Object&gt;=} actions Hash with declaration of custom action that should extend</span></div><div class='line' id='LC106'><span class="cm"> *   the default set of resource actions. The declaration should be created in the format of {@link</span></div><div class='line' id='LC107'><span class="cm"> *   ng.$http#usage_parameters $http.config}:</span></div><div class='line' id='LC108'><span class="cm"> *</span></div><div class='line' id='LC109'><span class="cm"> *       {action1: {method:?, params:?, isArray:?, headers:?, ...},</span></div><div class='line' id='LC110'><span class="cm"> *        action2: {method:?, params:?, isArray:?, headers:?, ...},</span></div><div class='line' id='LC111'><span class="cm"> *        ...}</span></div><div class='line' id='LC112'><span class="cm"> *</span></div><div class='line' id='LC113'><span class="cm"> *   Where:</span></div><div class='line' id='LC114'><span class="cm"> *</span></div><div class='line' id='LC115'><span class="cm"> *   - **`action`** – {string} – The name of action. This name becomes the name of the method on</span></div><div class='line' id='LC116'><span class="cm"> *     your resource object.</span></div><div class='line' id='LC117'><span class="cm"> *   - **`method`** – {string} – HTTP request method. Valid methods are: `GET`, `POST`, `PUT`,</span></div><div class='line' id='LC118'><span class="cm"> *     `DELETE`, and `JSONP`.</span></div><div class='line' id='LC119'><span class="cm"> *   - **`params`** – {Object=} – Optional set of pre-bound parameters for this action. If any of</span></div><div class='line' id='LC120'><span class="cm"> *     the parameter value is a function, it will be executed every time when a param value needs to</span></div><div class='line' id='LC121'><span class="cm"> *     be obtained for a request (unless the param was overridden).</span></div><div class='line' id='LC122'><span class="cm"> *   - **`url`** – {string} – action specific `url` override. The url templating is supported just</span></div><div class='line' id='LC123'><span class="cm"> *     like for the resource-level urls.</span></div><div class='line' id='LC124'><span class="cm"> *   - **`isArray`** – {boolean=} – If true then the returned object for this action is an array,</span></div><div class='line' id='LC125'><span class="cm"> *     see `returns` section.</span></div><div class='line' id='LC126'><span class="cm"> *   - **`transformRequest`** –</span></div><div class='line' id='LC127'><span class="cm"> *     `{function(data, headersGetter)|Array.&lt;function(data, headersGetter)&gt;}` –</span></div><div class='line' id='LC128'><span class="cm"> *     transform function or an array of such functions. The transform function takes the http</span></div><div class='line' id='LC129'><span class="cm"> *     request body and headers and returns its transformed (typically serialized) version.</span></div><div class='line' id='LC130'><span class="cm"> *   - **`transformResponse`** –</span></div><div class='line' id='LC131'><span class="cm"> *     `{function(data, headersGetter)|Array.&lt;function(data, headersGetter)&gt;}` –</span></div><div class='line' id='LC132'><span class="cm"> *     transform function or an array of such functions. The transform function takes the http</span></div><div class='line' id='LC133'><span class="cm"> *     response body and headers and returns its transformed (typically deserialized) version.</span></div><div class='line' id='LC134'><span class="cm"> *   - **`cache`** – `{boolean|Cache}` – If true, a default $http cache will be used to cache the</span></div><div class='line' id='LC135'><span class="cm"> *     GET request, otherwise if a cache instance built with</span></div><div class='line' id='LC136'><span class="cm"> *     {@link ng.$cacheFactory $cacheFactory}, this cache will be used for</span></div><div class='line' id='LC137'><span class="cm"> *     caching.</span></div><div class='line' id='LC138'><span class="cm"> *   - **`timeout`** – `{number|Promise}` – timeout in milliseconds, or {@link ng.$q promise} that</span></div><div class='line' id='LC139'><span class="cm"> *     should abort the request when resolved.</span></div><div class='line' id='LC140'><span class="cm"> *   - **`withCredentials`** - `{boolean}` - whether to set the `withCredentials` flag on the</span></div><div class='line' id='LC141'><span class="cm"> *     XHR object. See</span></div><div class='line' id='LC142'><span class="cm"> *     [requests with credentials](https://developer.mozilla.org/en/http_access_control#section_5)</span></div><div class='line' id='LC143'><span class="cm"> *     for more information.</span></div><div class='line' id='LC144'><span class="cm"> *   - **`responseType`** - `{string}` - see</span></div><div class='line' id='LC145'><span class="cm"> *     [requestType](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#responseType).</span></div><div class='line' id='LC146'><span class="cm"> *   - **`interceptor`** - `{Object=}` - The interceptor object has two optional methods -</span></div><div class='line' id='LC147'><span class="cm"> *     `response` and `responseError`. Both `response` and `responseError` interceptors get called</span></div><div class='line' id='LC148'><span class="cm"> *     with `http response` object. See {@link ng.$http $http interceptors}.</span></div><div class='line' id='LC149'><span class="cm"> *</span></div><div class='line' id='LC150'><span class="cm"> * @returns {Object} A resource &quot;class&quot; object with methods for the default set of resource actions</span></div><div class='line' id='LC151'><span class="cm"> *   optionally extended with custom `actions`. The default set contains these actions:</span></div><div class='line' id='LC152'><span class="cm"> *   ```js</span></div><div class='line' id='LC153'><span class="cm"> *   { &#39;get&#39;:    {method:&#39;GET&#39;},</span></div><div class='line' id='LC154'><span class="cm"> *     &#39;save&#39;:   {method:&#39;POST&#39;},</span></div><div class='line' id='LC155'><span class="cm"> *     &#39;query&#39;:  {method:&#39;GET&#39;, isArray:true},</span></div><div class='line' id='LC156'><span class="cm"> *     &#39;remove&#39;: {method:&#39;DELETE&#39;},</span></div><div class='line' id='LC157'><span class="cm"> *     &#39;delete&#39;: {method:&#39;DELETE&#39;} };</span></div><div class='line' id='LC158'><span class="cm"> *   ```</span></div><div class='line' id='LC159'><span class="cm"> *</span></div><div class='line' id='LC160'><span class="cm"> *   Calling these methods invoke an {@link ng.$http} with the specified http method,</span></div><div class='line' id='LC161'><span class="cm"> *   destination and parameters. When the data is returned from the server then the object is an</span></div><div class='line' id='LC162'><span class="cm"> *   instance of the resource class. The actions `save`, `remove` and `delete` are available on it</span></div><div class='line' id='LC163'><span class="cm"> *   as  methods with the `$` prefix. This allows you to easily perform CRUD operations (create,</span></div><div class='line' id='LC164'><span class="cm"> *   read, update, delete) on server-side data like this:</span></div><div class='line' id='LC165'><span class="cm"> *   ```js</span></div><div class='line' id='LC166'><span class="cm"> *   var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;});</span></div><div class='line' id='LC167'><span class="cm"> *   var user = User.get({userId:123}, function() {</span></div><div class='line' id='LC168'><span class="cm"> *     user.abc = true;</span></div><div class='line' id='LC169'><span class="cm"> *     user.$save();</span></div><div class='line' id='LC170'><span class="cm"> *   });</span></div><div class='line' id='LC171'><span class="cm"> *   ```</span></div><div class='line' id='LC172'><span class="cm"> *</span></div><div class='line' id='LC173'><span class="cm"> *   It is important to realize that invoking a $resource object method immediately returns an</span></div><div class='line' id='LC174'><span class="cm"> *   empty reference (object or array depending on `isArray`). Once the data is returned from the</span></div><div class='line' id='LC175'><span class="cm"> *   server the existing reference is populated with the actual data. This is a useful trick since</span></div><div class='line' id='LC176'><span class="cm"> *   usually the resource is assigned to a model which is then rendered by the view. Having an empty</span></div><div class='line' id='LC177'><span class="cm"> *   object results in no rendering, once the data arrives from the server then the object is</span></div><div class='line' id='LC178'><span class="cm"> *   populated with the data and the view automatically re-renders itself showing the new data. This</span></div><div class='line' id='LC179'><span class="cm"> *   means that in most cases one never has to write a callback function for the action methods.</span></div><div class='line' id='LC180'><span class="cm"> *</span></div><div class='line' id='LC181'><span class="cm"> *   The action methods on the class object or instance object can be invoked with the following</span></div><div class='line' id='LC182'><span class="cm"> *   parameters:</span></div><div class='line' id='LC183'><span class="cm"> *</span></div><div class='line' id='LC184'><span class="cm"> *   - HTTP GET &quot;class&quot; actions: `Resource.action([parameters], [success], [error])`</span></div><div class='line' id='LC185'><span class="cm"> *   - non-GET &quot;class&quot; actions: `Resource.action([parameters], postData, [success], [error])`</span></div><div class='line' id='LC186'><span class="cm"> *   - non-GET instance actions:  `instance.$action([parameters], [success], [error])`</span></div><div class='line' id='LC187'><span class="cm"> *</span></div><div class='line' id='LC188'><span class="cm"> *   Success callback is called with (value, responseHeaders) arguments. Error callback is called</span></div><div class='line' id='LC189'><span class="cm"> *   with (httpResponse) argument.</span></div><div class='line' id='LC190'><span class="cm"> *</span></div><div class='line' id='LC191'><span class="cm"> *   Class actions return empty instance (with additional properties below).</span></div><div class='line' id='LC192'><span class="cm"> *   Instance actions return promise of the action.</span></div><div class='line' id='LC193'><span class="cm"> *</span></div><div class='line' id='LC194'><span class="cm"> *   The Resource instances and collection have these additional properties:</span></div><div class='line' id='LC195'><span class="cm"> *</span></div><div class='line' id='LC196'><span class="cm"> *   - `$promise`: the {@link ng.$q promise} of the original server interaction that created this</span></div><div class='line' id='LC197'><span class="cm"> *     instance or collection.</span></div><div class='line' id='LC198'><span class="cm"> *</span></div><div class='line' id='LC199'><span class="cm"> *     On success, the promise is resolved with the same resource instance or collection object,</span></div><div class='line' id='LC200'><span class="cm"> *     updated with data from server. This makes it easy to use in</span></div><div class='line' id='LC201'><span class="cm"> *     {@link ngRoute.$routeProvider resolve section of $routeProvider.when()} to defer view</span></div><div class='line' id='LC202'><span class="cm"> *     rendering until the resource(s) are loaded.</span></div><div class='line' id='LC203'><span class="cm"> *</span></div><div class='line' id='LC204'><span class="cm"> *     On failure, the promise is resolved with the {@link ng.$http http response} object, without</span></div><div class='line' id='LC205'><span class="cm"> *     the `resource` property.</span></div><div class='line' id='LC206'><span class="cm"> *</span></div><div class='line' id='LC207'><span class="cm"> *     If an interceptor object was provided, the promise will instead be resolved with the value</span></div><div class='line' id='LC208'><span class="cm"> *     returned by the interceptor.</span></div><div class='line' id='LC209'><span class="cm"> *</span></div><div class='line' id='LC210'><span class="cm"> *   - `$resolved`: `true` after first server interaction is completed (either with success or</span></div><div class='line' id='LC211'><span class="cm"> *      rejection), `false` before that. Knowing if the Resource has been resolved is useful in</span></div><div class='line' id='LC212'><span class="cm"> *      data-binding.</span></div><div class='line' id='LC213'><span class="cm"> *</span></div><div class='line' id='LC214'><span class="cm"> * @example</span></div><div class='line' id='LC215'><span class="cm"> *</span></div><div class='line' id='LC216'><span class="cm"> * # Credit card resource</span></div><div class='line' id='LC217'><span class="cm"> *</span></div><div class='line' id='LC218'><span class="cm"> * ```js</span></div><div class='line' id='LC219'><span class="cm">     // Define CreditCard class</span></div><div class='line' id='LC220'><span class="cm">     var CreditCard = $resource(&#39;/user/:userId/card/:cardId&#39;,</span></div><div class='line' id='LC221'><span class="cm">      {userId:123, cardId:&#39;@id&#39;}, {</span></div><div class='line' id='LC222'><span class="cm">       charge: {method:&#39;POST&#39;, params:{charge:true}}</span></div><div class='line' id='LC223'><span class="cm">      });</span></div><div class='line' id='LC224'><br/></div><div class='line' id='LC225'><span class="cm">     // We can retrieve a collection from the server</span></div><div class='line' id='LC226'><span class="cm">     var cards = CreditCard.query(function() {</span></div><div class='line' id='LC227'><span class="cm">       // GET: /user/123/card</span></div><div class='line' id='LC228'><span class="cm">       // server returns: [ {id:456, number:&#39;1234&#39;, name:&#39;Smith&#39;} ];</span></div><div class='line' id='LC229'><br/></div><div class='line' id='LC230'><span class="cm">       var card = cards[0];</span></div><div class='line' id='LC231'><span class="cm">       // each item is an instance of CreditCard</span></div><div class='line' id='LC232'><span class="cm">       expect(card instanceof CreditCard).toEqual(true);</span></div><div class='line' id='LC233'><span class="cm">       card.name = &quot;J. Smith&quot;;</span></div><div class='line' id='LC234'><span class="cm">       // non GET methods are mapped onto the instances</span></div><div class='line' id='LC235'><span class="cm">       card.$save();</span></div><div class='line' id='LC236'><span class="cm">       // POST: /user/123/card/456 {id:456, number:&#39;1234&#39;, name:&#39;J. Smith&#39;}</span></div><div class='line' id='LC237'><span class="cm">       // server returns: {id:456, number:&#39;1234&#39;, name: &#39;J. Smith&#39;};</span></div><div class='line' id='LC238'><br/></div><div class='line' id='LC239'><span class="cm">       // our custom method is mapped as well.</span></div><div class='line' id='LC240'><span class="cm">       card.$charge({amount:9.99});</span></div><div class='line' id='LC241'><span class="cm">       // POST: /user/123/card/456?amount=9.99&amp;charge=true {id:456, number:&#39;1234&#39;, name:&#39;J. Smith&#39;}</span></div><div class='line' id='LC242'><span class="cm">     });</span></div><div class='line' id='LC243'><br/></div><div class='line' id='LC244'><span class="cm">     // we can create an instance as well</span></div><div class='line' id='LC245'><span class="cm">     var newCard = new CreditCard({number:&#39;0123&#39;});</span></div><div class='line' id='LC246'><span class="cm">     newCard.name = &quot;Mike Smith&quot;;</span></div><div class='line' id='LC247'><span class="cm">     newCard.$save();</span></div><div class='line' id='LC248'><span class="cm">     // POST: /user/123/card {number:&#39;0123&#39;, name:&#39;Mike Smith&#39;}</span></div><div class='line' id='LC249'><span class="cm">     // server returns: {id:789, number:&#39;0123&#39;, name: &#39;Mike Smith&#39;};</span></div><div class='line' id='LC250'><span class="cm">     expect(newCard.id).toEqual(789);</span></div><div class='line' id='LC251'><span class="cm"> * ```</span></div><div class='line' id='LC252'><span class="cm"> *</span></div><div class='line' id='LC253'><span class="cm"> * The object returned from this function execution is a resource &quot;class&quot; which has &quot;static&quot; method</span></div><div class='line' id='LC254'><span class="cm"> * for each action in the definition.</span></div><div class='line' id='LC255'><span class="cm"> *</span></div><div class='line' id='LC256'><span class="cm"> * Calling these methods invoke `$http` on the `url` template with the given `method`, `params` and</span></div><div class='line' id='LC257'><span class="cm"> * `headers`.</span></div><div class='line' id='LC258'><span class="cm"> * When the data is returned from the server then the object is an instance of the resource type and</span></div><div class='line' id='LC259'><span class="cm"> * all of the non-GET methods are available with `$` prefix. This allows you to easily support CRUD</span></div><div class='line' id='LC260'><span class="cm"> * operations (create, read, update, delete) on server-side data.</span></div><div class='line' id='LC261'><br/></div><div class='line' id='LC262'><span class="cm">   ```js</span></div><div class='line' id='LC263'><span class="cm">     var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;});</span></div><div class='line' id='LC264'><span class="cm">     User.get({userId:123}, function(user) {</span></div><div class='line' id='LC265'><span class="cm">       user.abc = true;</span></div><div class='line' id='LC266'><span class="cm">       user.$save();</span></div><div class='line' id='LC267'><span class="cm">     });</span></div><div class='line' id='LC268'><span class="cm">   ```</span></div><div class='line' id='LC269'><span class="cm"> *</span></div><div class='line' id='LC270'><span class="cm"> * It&#39;s worth noting that the success callback for `get`, `query` and other methods gets passed</span></div><div class='line' id='LC271'><span class="cm"> * in the response that came from the server as well as $http header getter function, so one</span></div><div class='line' id='LC272'><span class="cm"> * could rewrite the above example and get access to http headers as:</span></div><div class='line' id='LC273'><span class="cm"> *</span></div><div class='line' id='LC274'><span class="cm">   ```js</span></div><div class='line' id='LC275'><span class="cm">     var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;});</span></div><div class='line' id='LC276'><span class="cm">     User.get({userId:123}, function(u, getResponseHeaders){</span></div><div class='line' id='LC277'><span class="cm">       u.abc = true;</span></div><div class='line' id='LC278'><span class="cm">       u.$save(function(u, putResponseHeaders) {</span></div><div class='line' id='LC279'><span class="cm">         //u =&gt; saved user object</span></div><div class='line' id='LC280'><span class="cm">         //putResponseHeaders =&gt; $http header getter</span></div><div class='line' id='LC281'><span class="cm">       });</span></div><div class='line' id='LC282'><span class="cm">     });</span></div><div class='line' id='LC283'><span class="cm">   ```</span></div><div class='line' id='LC284'><span class="cm"> *</span></div><div class='line' id='LC285'><span class="cm"> * You can also access the raw `$http` promise via the `$promise` property on the object returned</span></div><div class='line' id='LC286'><span class="cm"> *</span></div><div class='line' id='LC287'><span class="cm">   ```</span></div><div class='line' id='LC288'><span class="cm">     var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;});</span></div><div class='line' id='LC289'><span class="cm">     User.get({userId:123})</span></div><div class='line' id='LC290'><span class="cm">         .$promise.then(function(user) {</span></div><div class='line' id='LC291'><span class="cm">           $scope.user = user;</span></div><div class='line' id='LC292'><span class="cm">         });</span></div><div class='line' id='LC293'><span class="cm">   ```</span></div><div class='line' id='LC294'><br/></div><div class='line' id='LC295'><span class="cm"> * # Creating a custom &#39;PUT&#39; request</span></div><div class='line' id='LC296'><span class="cm"> * In this example we create a custom method on our resource to make a PUT request</span></div><div class='line' id='LC297'><span class="cm"> * ```js</span></div><div class='line' id='LC298'><span class="cm"> *		var app = angular.module(&#39;app&#39;, [&#39;ngResource&#39;, &#39;ngRoute&#39;]);</span></div><div class='line' id='LC299'><span class="cm"> *</span></div><div class='line' id='LC300'><span class="cm"> *		// Some APIs expect a PUT request in the format URL/object/ID</span></div><div class='line' id='LC301'><span class="cm"> *		// Here we are creating an &#39;update&#39; method</span></div><div class='line' id='LC302'><span class="cm"> *		app.factory(&#39;Notes&#39;, [&#39;$resource&#39;, function($resource) {</span></div><div class='line' id='LC303'><span class="cm"> *    return $resource(&#39;/notes/:id&#39;, null,</span></div><div class='line' id='LC304'><span class="cm"> *        {</span></div><div class='line' id='LC305'><span class="cm"> *            &#39;update&#39;: { method:&#39;PUT&#39; }</span></div><div class='line' id='LC306'><span class="cm"> *        });</span></div><div class='line' id='LC307'><span class="cm"> *		}]);</span></div><div class='line' id='LC308'><span class="cm"> *</span></div><div class='line' id='LC309'><span class="cm"> *		// In our controller we get the ID from the URL using ngRoute and $routeParams</span></div><div class='line' id='LC310'><span class="cm"> *		// We pass in $routeParams and our Notes factory along with $scope</span></div><div class='line' id='LC311'><span class="cm"> *		app.controller(&#39;NotesCtrl&#39;, [&#39;$scope&#39;, &#39;$routeParams&#39;, &#39;Notes&#39;,</span></div><div class='line' id='LC312'><span class="cm">                                      function($scope, $routeParams, Notes) {</span></div><div class='line' id='LC313'><span class="cm"> *    // First get a note object from the factory</span></div><div class='line' id='LC314'><span class="cm"> *    var note = Notes.get({ id:$routeParams.id });</span></div><div class='line' id='LC315'><span class="cm"> *    $id = note.id;</span></div><div class='line' id='LC316'><span class="cm"> *</span></div><div class='line' id='LC317'><span class="cm"> *    // Now call update passing in the ID first then the object you are updating</span></div><div class='line' id='LC318'><span class="cm"> *    Notes.update({ id:$id }, note);</span></div><div class='line' id='LC319'><span class="cm"> *</span></div><div class='line' id='LC320'><span class="cm"> *    // This will PUT /notes/ID with the note object in the request payload</span></div><div class='line' id='LC321'><span class="cm"> *		}]);</span></div><div class='line' id='LC322'><span class="cm"> * ```</span></div><div class='line' id='LC323'><span class="cm"> */</span></div><div class='line' id='LC324'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;ngResource&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;ng&#39;</span><span class="p">]).</span></div><div class='line' id='LC325'>&nbsp;&nbsp;<span class="nx">factory</span><span class="p">(</span><span class="s1">&#39;$resource&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;$http&#39;</span><span class="p">,</span> <span class="s1">&#39;$q&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$http</span><span class="p">,</span> <span class="nx">$q</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC326'><br/></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">DEFAULT_ACTIONS</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;get&#39;</span><span class="o">:</span>    <span class="p">{</span><span class="nx">method</span><span class="o">:</span><span class="s1">&#39;GET&#39;</span><span class="p">},</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;save&#39;</span><span class="o">:</span>   <span class="p">{</span><span class="nx">method</span><span class="o">:</span><span class="s1">&#39;POST&#39;</span><span class="p">},</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;query&#39;</span><span class="o">:</span>  <span class="p">{</span><span class="nx">method</span><span class="o">:</span><span class="s1">&#39;GET&#39;</span><span class="p">,</span> <span class="nx">isArray</span><span class="o">:</span><span class="kc">true</span><span class="p">},</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;remove&#39;</span><span class="o">:</span> <span class="p">{</span><span class="nx">method</span><span class="o">:</span><span class="s1">&#39;DELETE&#39;</span><span class="p">},</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;delete&#39;</span><span class="o">:</span> <span class="p">{</span><span class="nx">method</span><span class="o">:</span><span class="s1">&#39;DELETE&#39;</span><span class="p">}</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">noop</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">noop</span><span class="p">,</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">,</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">extend</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">extend</span><span class="p">,</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">copy</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">copy</span><span class="p">,</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isFunction</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">;</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC341'><span class="cm">     * We need our custom method because encodeURIComponent is too aggressive and doesn&#39;t follow</span></div><div class='line' id='LC342'><span class="cm">     * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set (pchar) allowed in path</span></div><div class='line' id='LC343'><span class="cm">     * segments:</span></div><div class='line' id='LC344'><span class="cm">     *    segment       = *pchar</span></div><div class='line' id='LC345'><span class="cm">     *    pchar         = unreserved / pct-encoded / sub-delims / &quot;:&quot; / &quot;@&quot;</span></div><div class='line' id='LC346'><span class="cm">     *    pct-encoded   = &quot;%&quot; HEXDIG HEXDIG</span></div><div class='line' id='LC347'><span class="cm">     *    unreserved    = ALPHA / DIGIT / &quot;-&quot; / &quot;.&quot; / &quot;_&quot; / &quot;~&quot;</span></div><div class='line' id='LC348'><span class="cm">     *    sub-delims    = &quot;!&quot; / &quot;$&quot; / &quot;&amp;&quot; / &quot;&#39;&quot; / &quot;(&quot; / &quot;)&quot;</span></div><div class='line' id='LC349'><span class="cm">     *                     / &quot;*&quot; / &quot;+&quot; / &quot;,&quot; / &quot;;&quot; / &quot;=&quot;</span></div><div class='line' id='LC350'><span class="cm">     */</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">encodeUriSegment</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">encodeUriQuery</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="kc">true</span><span class="p">).</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%26/gi</span><span class="p">,</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">).</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%3D/gi</span><span class="p">,</span> <span class="s1">&#39;=&#39;</span><span class="p">).</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%2B/gi</span><span class="p">,</span> <span class="s1">&#39;+&#39;</span><span class="p">);</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC357'><br/></div><div class='line' id='LC358'><br/></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC360'><span class="cm">     * This method is intended for encoding *key* or *value* parts of query component. We need a</span></div><div class='line' id='LC361'><span class="cm">     * custom method because encodeURIComponent is too aggressive and encodes stuff that doesn&#39;t</span></div><div class='line' id='LC362'><span class="cm">     * have to be encoded per http://tools.ietf.org/html/rfc3986:</span></div><div class='line' id='LC363'><span class="cm">     *    query       = *( pchar / &quot;/&quot; / &quot;?&quot; )</span></div><div class='line' id='LC364'><span class="cm">     *    pchar         = unreserved / pct-encoded / sub-delims / &quot;:&quot; / &quot;@&quot;</span></div><div class='line' id='LC365'><span class="cm">     *    unreserved    = ALPHA / DIGIT / &quot;-&quot; / &quot;.&quot; / &quot;_&quot; / &quot;~&quot;</span></div><div class='line' id='LC366'><span class="cm">     *    pct-encoded   = &quot;%&quot; HEXDIG HEXDIG</span></div><div class='line' id='LC367'><span class="cm">     *    sub-delims    = &quot;!&quot; / &quot;$&quot; / &quot;&amp;&quot; / &quot;&#39;&quot; / &quot;(&quot; / &quot;)&quot;</span></div><div class='line' id='LC368'><span class="cm">     *                     / &quot;*&quot; / &quot;+&quot; / &quot;,&quot; / &quot;;&quot; / &quot;=&quot;</span></div><div class='line' id='LC369'><span class="cm">     */</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">encodeUriQuery</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">pctEncodeSpaces</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">val</span><span class="p">).</span></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%40/gi</span><span class="p">,</span> <span class="s1">&#39;@&#39;</span><span class="p">).</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%3A/gi</span><span class="p">,</span> <span class="s1">&#39;:&#39;</span><span class="p">).</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%24/g</span><span class="p">,</span> <span class="s1">&#39;$&#39;</span><span class="p">).</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%2C/gi</span><span class="p">,</span> <span class="s1">&#39;,&#39;</span><span class="p">).</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%20/g</span><span class="p">,</span> <span class="p">(</span><span class="nx">pctEncodeSpaces</span> <span class="o">?</span> <span class="s1">&#39;%20&#39;</span> <span class="o">:</span> <span class="s1">&#39;+&#39;</span><span class="p">));</span></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC378'><br/></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">Route</span><span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">defaults</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">template</span> <span class="o">=</span> <span class="nx">template</span><span class="p">;</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="nx">defaults</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">urlParams</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC384'><br/></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Route</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setUrlParams</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">config</span><span class="p">,</span> <span class="nx">params</span><span class="p">,</span> <span class="nx">actionUrl</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">actionUrl</span> <span class="o">||</span> <span class="nx">self</span><span class="p">.</span><span class="nx">template</span><span class="p">,</span></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">val</span><span class="p">,</span></div><div class='line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">encodedVal</span><span class="p">;</span></div><div class='line' id='LC391'><br/></div><div class='line' id='LC392'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">urlParams</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">urlParams</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">url</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="sr">/\W/</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">param</span><span class="p">){</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">param</span> <span class="o">===</span> <span class="s1">&#39;hasOwnProperty&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">$resourceMinErr</span><span class="p">(</span><span class="s1">&#39;badname&#39;</span><span class="p">,</span> <span class="s2">&quot;hasOwnProperty is not a valid parameter name.&quot;</span><span class="p">);</span></div><div class='line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;^\\d+$&quot;</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">param</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">param</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;(^|[^\\\\]):&quot;</span> <span class="o">+</span> <span class="nx">param</span> <span class="o">+</span> <span class="s2">&quot;(\\W|$)&quot;</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">url</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">urlParams</span><span class="p">[</span><span class="nx">param</span><span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\:/g</span><span class="p">,</span> <span class="s1">&#39;:&#39;</span><span class="p">);</span></div><div class='line' id='LC403'><br/></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span> <span class="o">=</span> <span class="nx">params</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">urlParams</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">urlParam</span><span class="p">){</span></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">val</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">urlParam</span><span class="p">)</span> <span class="o">?</span> <span class="nx">params</span><span class="p">[</span><span class="nx">urlParam</span><span class="p">]</span> <span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">defaults</span><span class="p">[</span><span class="nx">urlParam</span><span class="p">];</span></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isDefined</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">val</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">encodedVal</span> <span class="o">=</span> <span class="nx">encodeUriSegment</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span></div><div class='line' id='LC409'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;:&quot;</span> <span class="o">+</span> <span class="nx">urlParam</span> <span class="o">+</span> <span class="s2">&quot;(\\W|$)&quot;</span><span class="p">,</span> <span class="s2">&quot;g&quot;</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span> <span class="nx">p1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">encodedVal</span> <span class="o">+</span> <span class="nx">p1</span><span class="p">;</span></div><div class='line' id='LC411'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC412'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;(\/?):&quot;</span> <span class="o">+</span> <span class="nx">urlParam</span> <span class="o">+</span> <span class="s2">&quot;(\\W|$)&quot;</span><span class="p">,</span> <span class="s2">&quot;g&quot;</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">leadingSlashes</span><span class="p">,</span> <span class="nx">tail</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">tail</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;/&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">tail</span><span class="p">;</span></div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">leadingSlashes</span> <span class="o">+</span> <span class="nx">tail</span><span class="p">;</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC423'><br/></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// strip trailing slashes and set the url</span></div><div class='line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\/+$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;/&#39;</span><span class="p">;</span></div><div class='line' id='LC426'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// then replace collapse `/.` if found in the last URL path segment before the query</span></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// E.g. `http://url.com/id./format?q=x` becomes `http://url.com/id.format?q=x`</span></div><div class='line' id='LC428'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\/\.(?=\w+($|\?))/</span><span class="p">,</span> <span class="s1">&#39;.&#39;</span><span class="p">);</span></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// replace escaped `/\.` with `/.`</span></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\/\\\./</span><span class="p">,</span> <span class="s1">&#39;/.&#39;</span><span class="p">);</span></div><div class='line' id='LC431'><br/></div><div class='line' id='LC432'><br/></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// set params - delegate param encoding to $http</span></div><div class='line' id='LC434'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">){</span></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">urlParams</span><span class="p">[</span><span class="nx">key</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="p">.</span><span class="nx">params</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">params</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="p">.</span><span class="nx">params</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC438'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC442'><br/></div><div class='line' id='LC443'><br/></div><div class='line' id='LC444'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">resourceFactory</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">paramDefaults</span><span class="p">,</span> <span class="nx">actions</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">route</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Route</span><span class="p">(</span><span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC446'><br/></div><div class='line' id='LC447'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">actions</span> <span class="o">=</span> <span class="nx">extend</span><span class="p">({},</span> <span class="nx">DEFAULT_ACTIONS</span><span class="p">,</span> <span class="nx">actions</span><span class="p">);</span></div><div class='line' id='LC448'><br/></div><div class='line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">extractParams</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">actionParams</span><span class="p">){</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ids</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">actionParams</span> <span class="o">=</span> <span class="nx">extend</span><span class="p">({},</span> <span class="nx">paramDefaults</span><span class="p">,</span> <span class="nx">actionParams</span><span class="p">);</span></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">actionParams</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">){</span></div><div class='line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">();</span> <span class="p">}</span></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ids</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;@&#39;</span> <span class="o">?</span></div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lookupDottedPath</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span> <span class="o">:</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ids</span><span class="p">;</span></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC459'><br/></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">defaultResponseInterceptor</span><span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">response</span><span class="p">.</span><span class="nx">resource</span><span class="p">;</span></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC463'><br/></div><div class='line' id='LC464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">Resource</span><span class="p">(</span><span class="nx">value</span><span class="p">){</span></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shallowClearAndCopy</span><span class="p">(</span><span class="nx">value</span> <span class="o">||</span> <span class="p">{},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC467'><br/></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">actions</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">action</span><span class="p">,</span> <span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC469'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">hasBody</span> <span class="o">=</span> <span class="sr">/^(POST|PUT|PATCH)$/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">action</span><span class="p">.</span><span class="nx">method</span><span class="p">);</span></div><div class='line' id='LC470'><br/></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Resource</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a1</span><span class="p">,</span> <span class="nx">a2</span><span class="p">,</span> <span class="nx">a3</span><span class="p">,</span> <span class="nx">a4</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">{},</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">success</span><span class="p">,</span> <span class="nx">error</span><span class="p">;</span></div><div class='line' id='LC473'><br/></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/* jshint -W086 */</span> <span class="cm">/* (purposefully fall through case statements) */</span></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">4</span><span class="o">:</span></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span> <span class="o">=</span> <span class="nx">a4</span><span class="p">;</span></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">=</span> <span class="nx">a3</span><span class="p">;</span></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//fallthrough</span></div><div class='line' id='LC480'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">3</span><span class="o">:</span></div><div class='line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">2</span><span class="o">:</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">a2</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">a1</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC485'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span> <span class="o">=</span> <span class="nx">a2</span><span class="p">;</span></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC488'><br/></div><div class='line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">=</span> <span class="nx">a2</span><span class="p">;</span></div><div class='line' id='LC490'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span> <span class="o">=</span> <span class="nx">a3</span><span class="p">;</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//fallthrough</span></div><div class='line' id='LC492'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">a2</span><span class="p">;</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">=</span> <span class="nx">a3</span><span class="p">;</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">1</span><span class="o">:</span></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">a1</span><span class="p">))</span> <span class="nx">success</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">hasBody</span><span class="p">)</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC501'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="nx">params</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC502'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC503'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">0</span><span class="o">:</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC504'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC505'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">$resourceMinErr</span><span class="p">(</span><span class="s1">&#39;badargs&#39;</span><span class="p">,</span></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Expected up to 4 arguments [params, data, success, error], got {0} arguments&quot;</span><span class="p">,</span></div><div class='line' id='LC507'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC509'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/* jshint +W086 */</span> <span class="cm">/* (purposefully fall through case statements) */</span></div><div class='line' id='LC510'><br/></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isInstanceCall</span> <span class="o">=</span> <span class="k">this</span> <span class="k">instanceof</span> <span class="nx">Resource</span><span class="p">;</span></div><div class='line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">isInstanceCall</span> <span class="o">?</span> <span class="nx">data</span> <span class="o">:</span> <span class="p">(</span><span class="nx">action</span><span class="p">.</span><span class="nx">isArray</span> <span class="o">?</span> <span class="p">[]</span> <span class="o">:</span> <span class="k">new</span> <span class="nx">Resource</span><span class="p">(</span><span class="nx">data</span><span class="p">));</span></div><div class='line' id='LC513'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">httpConfig</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC514'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">responseInterceptor</span> <span class="o">=</span> <span class="nx">action</span><span class="p">.</span><span class="nx">interceptor</span> <span class="o">&amp;&amp;</span> <span class="nx">action</span><span class="p">.</span><span class="nx">interceptor</span><span class="p">.</span><span class="nx">response</span> <span class="o">||</span></div><div class='line' id='LC515'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defaultResponseInterceptor</span><span class="p">;</span></div><div class='line' id='LC516'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">responseErrorInterceptor</span> <span class="o">=</span> <span class="nx">action</span><span class="p">.</span><span class="nx">interceptor</span> <span class="o">&amp;&amp;</span> <span class="nx">action</span><span class="p">.</span><span class="nx">interceptor</span><span class="p">.</span><span class="nx">responseError</span> <span class="o">||</span></div><div class='line' id='LC517'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC518'><br/></div><div class='line' id='LC519'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">action</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC520'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">key</span> <span class="o">!=</span> <span class="s1">&#39;params&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">key</span> <span class="o">!=</span> <span class="s1">&#39;isArray&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">key</span> <span class="o">!=</span> <span class="s1">&#39;interceptor&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC521'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">httpConfig</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">copy</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC522'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC523'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC524'><br/></div><div class='line' id='LC525'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">hasBody</span><span class="p">)</span> <span class="nx">httpConfig</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC526'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">route</span><span class="p">.</span><span class="nx">setUrlParams</span><span class="p">(</span><span class="nx">httpConfig</span><span class="p">,</span></div><div class='line' id='LC527'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">extend</span><span class="p">({},</span> <span class="nx">extractParams</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">action</span><span class="p">.</span><span class="nx">params</span> <span class="o">||</span> <span class="p">{}),</span> <span class="nx">params</span><span class="p">),</span></div><div class='line' id='LC528'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">action</span><span class="p">.</span><span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC529'><br/></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">promise</span> <span class="o">=</span> <span class="nx">$http</span><span class="p">(</span><span class="nx">httpConfig</span><span class="p">).</span><span class="nx">then</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">response</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">$promise</span><span class="p">;</span></div><div class='line' id='LC533'><br/></div><div class='line' id='LC534'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC535'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Need to convert action.isArray to boolean in case it is undefined</span></div><div class='line' id='LC536'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// jshint -W018</span></div><div class='line' id='LC537'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="o">!==</span> <span class="p">(</span><span class="o">!!</span><span class="nx">action</span><span class="p">.</span><span class="nx">isArray</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC538'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">$resourceMinErr</span><span class="p">(</span><span class="s1">&#39;badcfg&#39;</span><span class="p">,</span> <span class="s1">&#39;Error in resource configuration. Expected &#39;</span> <span class="o">+</span></div><div class='line' id='LC539'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;response to contain an {0} but got an {1}&#39;</span><span class="p">,</span></div><div class='line' id='LC540'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">action</span><span class="p">.</span><span class="nx">isArray</span><span class="o">?</span><span class="s1">&#39;array&#39;</span><span class="o">:</span><span class="s1">&#39;object&#39;</span><span class="p">,</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span><span class="o">?</span><span class="s1">&#39;array&#39;</span><span class="o">:</span><span class="s1">&#39;object&#39;</span><span class="p">);</span></div><div class='line' id='LC541'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC542'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// jshint +W018</span></div><div class='line' id='LC543'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">action</span><span class="p">.</span><span class="nx">isArray</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC544'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC545'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC546'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">Resource</span><span class="p">(</span><span class="nx">item</span><span class="p">));</span></div><div class='line' id='LC547'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC548'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC549'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shallowClearAndCopy</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC550'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">$promise</span> <span class="o">=</span> <span class="nx">promise</span><span class="p">;</span></div><div class='line' id='LC551'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC552'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC553'><br/></div><div class='line' id='LC554'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">$resolved</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC555'><br/></div><div class='line' id='LC556'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">response</span><span class="p">.</span><span class="nx">resource</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC557'><br/></div><div class='line' id='LC558'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">response</span><span class="p">;</span></div><div class='line' id='LC559'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="kd">function</span><span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC560'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">$resolved</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC561'><br/></div><div class='line' id='LC562'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">error</span><span class="o">||</span><span class="nx">noop</span><span class="p">)(</span><span class="nx">response</span><span class="p">);</span></div><div class='line' id='LC563'><br/></div><div class='line' id='LC564'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$q</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">response</span><span class="p">);</span></div><div class='line' id='LC565'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC566'><br/></div><div class='line' id='LC567'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span> <span class="o">=</span> <span class="nx">promise</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span></div><div class='line' id='LC568'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span><span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC569'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">responseInterceptor</span><span class="p">(</span><span class="nx">response</span><span class="p">);</span></div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">success</span><span class="o">||</span><span class="nx">noop</span><span class="p">)(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">response</span><span class="p">.</span><span class="nx">headers</span><span class="p">);</span></div><div class='line' id='LC571'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC572'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC573'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">responseErrorInterceptor</span><span class="p">);</span></div><div class='line' id='LC574'><br/></div><div class='line' id='LC575'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isInstanceCall</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC576'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// we are creating instance / collection</span></div><div class='line' id='LC577'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// - set the initial promise</span></div><div class='line' id='LC578'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// - return the instance / collection</span></div><div class='line' id='LC579'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">$promise</span> <span class="o">=</span> <span class="nx">promise</span><span class="p">;</span></div><div class='line' id='LC580'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">$resolved</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC581'><br/></div><div class='line' id='LC582'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC583'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC584'><br/></div><div class='line' id='LC585'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// instance call</span></div><div class='line' id='LC586'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">promise</span><span class="p">;</span></div><div class='line' id='LC587'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC588'><br/></div><div class='line' id='LC589'><br/></div><div class='line' id='LC590'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Resource</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="s1">&#39;$&#39;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="nx">success</span><span class="p">,</span> <span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC591'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">params</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC592'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span> <span class="o">=</span> <span class="nx">success</span><span class="p">;</span> <span class="nx">success</span> <span class="o">=</span> <span class="nx">params</span><span class="p">;</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC593'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC594'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">Resource</span><span class="p">[</span><span class="nx">name</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">params</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">success</span><span class="p">,</span> <span class="nx">error</span><span class="p">);</span></div><div class='line' id='LC595'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">.</span><span class="nx">$promise</span> <span class="o">||</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC596'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC597'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC598'><br/></div><div class='line' id='LC599'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Resource</span><span class="p">.</span><span class="nx">bind</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">additionalParamDefaults</span><span class="p">){</span></div><div class='line' id='LC600'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">resourceFactory</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">extend</span><span class="p">({},</span> <span class="nx">paramDefaults</span><span class="p">,</span> <span class="nx">additionalParamDefaults</span><span class="p">),</span> <span class="nx">actions</span><span class="p">);</span></div><div class='line' id='LC601'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC602'><br/></div><div class='line' id='LC603'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Resource</span><span class="p">;</span></div><div class='line' id='LC604'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC605'><br/></div><div class='line' id='LC606'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">resourceFactory</span><span class="p">;</span></div><div class='line' id='LC607'>&nbsp;&nbsp;<span class="p">}]);</span></div><div class='line' id='LC608'><br/></div><div class='line' id='LC609'><br/></div><div class='line' id='LC610'><span class="p">})(</span><span class="nb">window</span><span class="p">,</span> <span class="nb">window</span><span class="p">.</span><span class="nx">angular</span><span class="p">);</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05581s from github-fe136-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-c23f6bb20db24ab07b4ee77598ac060d1ca974e3.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-878d4b5b0998b0ef887f50f5b3e0e3d3eb733106.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

