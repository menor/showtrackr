




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>tvshow-tracker/public/vendor/angular-cookies.js at master · sahat/tvshow-tracker</title>
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

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="547F2050:01FE:C89C0F:539BFFC6" name="octolytics-dimension-request_id" /><meta content="1360794" name="octolytics-actor-id" /><meta content="menor" name="octolytics-actor-login" /><meta content="bd97bf900b96245da1ed518d5799ca1d4810ca3ad080c301613a6e5eece9c83f" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="G8dRHgHKw7tn6j6WvDEoQCIe9YdDpSdTa+2pe2UsLXcHTQ/ppiyvYQIWd0eg1RSGFnkK99EXpO15yVjoK2SGgA==" name="csrf-token" />

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
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="WyIMUcEmAA9r0z3Kj6Hhk3aGJywTri35gp8CxTZAlr0FzYgdHsAkYsYmSh9274fIV6DSaolc4Cp84GC9ojBWNQ==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="19387194" />

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

    <form accept-charset="UTF-8" action="/sahat/tvshow-tracker/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="wM/XpkT8qYZ2jVMJV9YFO44NlVOVBNIEoybPSFEWAa2RY6vkZcvu6N1xGNVePi59DQmZsCpM+zinoyTy6vx0wA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar sahat/tvshow-tracker">
        <span class="octicon octicon-star"></span><span class="text">Unstar</span>
      </button>
        <a class="social-count js-social-count" href="/sahat/tvshow-tracker/stargazers">
          91
        </a>
</form>
    <form accept-charset="UTF-8" action="/sahat/tvshow-tracker/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="3lOHuKdMEMUZDCX27QQUwEvssOQVmg533yJbfIqdMQseauyb2T6IGmmwVhK87w7LifIshwsB2tunSr2ttN+DBw==" /></div>
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
          


<a href="/sahat/tvshow-tracker/blob/2f3421432707a52b81a36a7eb0f946074547767a/public/vendor/angular-cookies.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:26386592d437ba8ddf8266b2042c975b -->

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
              <a href="/sahat/tvshow-tracker/blob/master/public/vendor/angular-cookies.js"
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
          data-clipboard-text="public/vendor/angular-cookies.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/sahat/tvshow-tracker" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">tvshow-tracker</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/sahat/tvshow-tracker/tree/master/public" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">public</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/sahat/tvshow-tracker/tree/master/public/vendor" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">vendor</span></a></span><span class="separator"> / </span><strong class="final-path">angular-cookies.js</strong>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/sahat/tvshow-tracker/contributors/master/public/vendor/angular-cookies.js">
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
          <span>197 lines (175 sloc)</span>
          <span class="meta-divider"></span>
        <span>5.427 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/sahat/tvshow-tracker?branch=master&amp;filepath=public%2Fvendor%2Fangular-cookies.js"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/sahat/tvshow-tracker/edit/master/public/vendor/angular-cookies.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/sahat/tvshow-tracker/raw/master/public/vendor/angular-cookies.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/sahat/tvshow-tracker/blame/master/public/vendor/angular-cookies.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/sahat/tvshow-tracker/commits/master/public/vendor/angular-cookies.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/sahat/tvshow-tracker/delete/master/public/vendor/angular-cookies.js"
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

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * @license AngularJS v1.3.0-beta.7</span></div><div class='line' id='LC3'><span class="cm"> * (c) 2010-2014 Google, Inc. http://angularjs.org</span></div><div class='line' id='LC4'><span class="cm"> * License: MIT</span></div><div class='line' id='LC5'><span class="cm"> */</span></div><div class='line' id='LC6'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="nx">angular</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span><span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="cm">/**</span></div><div class='line' id='LC9'><span class="cm"> * @ngdoc module</span></div><div class='line' id='LC10'><span class="cm"> * @name ngCookies</span></div><div class='line' id='LC11'><span class="cm"> * @description</span></div><div class='line' id='LC12'><span class="cm"> *</span></div><div class='line' id='LC13'><span class="cm"> * # ngCookies</span></div><div class='line' id='LC14'><span class="cm"> *</span></div><div class='line' id='LC15'><span class="cm"> * The `ngCookies` module provides a convenient wrapper for reading and writing browser cookies.</span></div><div class='line' id='LC16'><span class="cm"> *</span></div><div class='line' id='LC17'><span class="cm"> *</span></div><div class='line' id='LC18'><span class="cm"> * &lt;div doc-module-components=&quot;ngCookies&quot;&gt;&lt;/div&gt;</span></div><div class='line' id='LC19'><span class="cm"> *</span></div><div class='line' id='LC20'><span class="cm"> * See {@link ngCookies.$cookies `$cookies`} and</span></div><div class='line' id='LC21'><span class="cm"> * {@link ngCookies.$cookieStore `$cookieStore`} for usage.</span></div><div class='line' id='LC22'><span class="cm"> */</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;ngCookies&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;ng&#39;</span><span class="p">]).</span></div><div class='line' id='LC26'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC27'><span class="cm">   * @ngdoc service</span></div><div class='line' id='LC28'><span class="cm">   * @name $cookies</span></div><div class='line' id='LC29'><span class="cm">   *</span></div><div class='line' id='LC30'><span class="cm">   * @description</span></div><div class='line' id='LC31'><span class="cm">   * Provides read/write access to browser&#39;s cookies.</span></div><div class='line' id='LC32'><span class="cm">   *</span></div><div class='line' id='LC33'><span class="cm">   * Only a simple Object is exposed and by adding or removing properties to/from this object, new</span></div><div class='line' id='LC34'><span class="cm">   * cookies are created/deleted at the end of current $eval.</span></div><div class='line' id='LC35'><span class="cm">   * The object&#39;s properties can only be strings.</span></div><div class='line' id='LC36'><span class="cm">   *</span></div><div class='line' id='LC37'><span class="cm">   * Requires the {@link ngCookies `ngCookies`} module to be installed.</span></div><div class='line' id='LC38'><span class="cm">   *</span></div><div class='line' id='LC39'><span class="cm">   * @example</span></div><div class='line' id='LC40'><span class="cm">   &lt;example&gt;</span></div><div class='line' id='LC41'><span class="cm">     &lt;file name=&quot;index.html&quot;&gt;</span></div><div class='line' id='LC42'><span class="cm">       &lt;script&gt;</span></div><div class='line' id='LC43'><span class="cm">         function ExampleController($cookies) {</span></div><div class='line' id='LC44'><span class="cm">           // Retrieving a cookie</span></div><div class='line' id='LC45'><span class="cm">           var favoriteCookie = $cookies.myFavorite;</span></div><div class='line' id='LC46'><span class="cm">           // Setting a cookie</span></div><div class='line' id='LC47'><span class="cm">           $cookies.myFavorite = &#39;oatmeal&#39;;</span></div><div class='line' id='LC48'><span class="cm">         }</span></div><div class='line' id='LC49'><span class="cm">       &lt;/script&gt;</span></div><div class='line' id='LC50'><span class="cm">     &lt;/file&gt;</span></div><div class='line' id='LC51'><span class="cm">   &lt;/example&gt;</span></div><div class='line' id='LC52'><span class="cm">   */</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;<span class="nx">factory</span><span class="p">(</span><span class="s1">&#39;$cookies&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;$rootScope&#39;</span><span class="p">,</span> <span class="s1">&#39;$browser&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">$rootScope</span><span class="p">,</span> <span class="nx">$browser</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cookies</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lastCookies</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lastBrowserCookies</span><span class="p">,</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">runEval</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">copy</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">copy</span><span class="p">,</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isUndefined</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">;</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//creates a poller fn that copies all cookies from the $browser to service &amp; inits the service</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$browser</span><span class="p">.</span><span class="nx">addPollFn</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">currentCookies</span> <span class="o">=</span> <span class="nx">$browser</span><span class="p">.</span><span class="nx">cookies</span><span class="p">();</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">lastBrowserCookies</span> <span class="o">!=</span> <span class="nx">currentCookies</span><span class="p">)</span> <span class="p">{</span> <span class="c1">//relies on browser.cookies() impl</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lastBrowserCookies</span> <span class="o">=</span> <span class="nx">currentCookies</span><span class="p">;</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">copy</span><span class="p">(</span><span class="nx">currentCookies</span><span class="p">,</span> <span class="nx">lastCookies</span><span class="p">);</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">copy</span><span class="p">(</span><span class="nx">currentCookies</span><span class="p">,</span> <span class="nx">cookies</span><span class="p">);</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">runEval</span><span class="p">)</span> <span class="nx">$rootScope</span><span class="p">.</span><span class="nx">$apply</span><span class="p">();</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})();</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">runEval</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//at the end of each eval, push cookies</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//TODO: this should happen before the &quot;delayed&quot; watches fire, because if some cookies are not</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      strings or browser refuses to store some cookies, we update the model in the push fn.</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$rootScope</span><span class="p">.</span><span class="nx">$watch</span><span class="p">(</span><span class="nx">push</span><span class="p">);</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">cookies</span><span class="p">;</span></div><div class='line' id='LC80'><br/></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC83'><span class="cm">       * Pushes all the cookies from the service to the browser and verifies if all cookies were</span></div><div class='line' id='LC84'><span class="cm">       * stored.</span></div><div class='line' id='LC85'><span class="cm">       */</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">push</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">name</span><span class="p">,</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">,</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">browserCookies</span><span class="p">,</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">updated</span><span class="p">;</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//delete any cookies deleted in $cookies</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">name</span> <span class="k">in</span> <span class="nx">lastCookies</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">cookies</span><span class="p">[</span><span class="nx">name</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$browser</span><span class="p">.</span><span class="nx">cookies</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">);</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//update all cookies updated in $cookies</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="nx">name</span> <span class="k">in</span> <span class="nx">cookies</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">cookies</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cookies</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">!==</span> <span class="nx">lastCookies</span><span class="p">[</span><span class="nx">name</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$browser</span><span class="p">.</span><span class="nx">cookies</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">updated</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//verify what was actually stored</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">updated</span><span class="p">){</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">updated</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">browserCookies</span> <span class="o">=</span> <span class="nx">$browser</span><span class="p">.</span><span class="nx">cookies</span><span class="p">();</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">name</span> <span class="k">in</span> <span class="nx">cookies</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cookies</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">browserCookies</span><span class="p">[</span><span class="nx">name</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//delete or reset all cookies that the browser dropped from $cookies</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">browserCookies</span><span class="p">[</span><span class="nx">name</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">cookies</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cookies</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">browserCookies</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">updated</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}]).</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC134'><span class="cm">   * @ngdoc service</span></div><div class='line' id='LC135'><span class="cm">   * @name $cookieStore</span></div><div class='line' id='LC136'><span class="cm">   * @requires $cookies</span></div><div class='line' id='LC137'><span class="cm">   *</span></div><div class='line' id='LC138'><span class="cm">   * @description</span></div><div class='line' id='LC139'><span class="cm">   * Provides a key-value (string-object) storage, that is backed by session cookies.</span></div><div class='line' id='LC140'><span class="cm">   * Objects put or retrieved from this storage are automatically serialized or</span></div><div class='line' id='LC141'><span class="cm">   * deserialized by angular&#39;s toJson/fromJson.</span></div><div class='line' id='LC142'><span class="cm">   *</span></div><div class='line' id='LC143'><span class="cm">   * Requires the {@link ngCookies `ngCookies`} module to be installed.</span></div><div class='line' id='LC144'><span class="cm">   *</span></div><div class='line' id='LC145'><span class="cm">   * @example</span></div><div class='line' id='LC146'><span class="cm">   */</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;<span class="nx">factory</span><span class="p">(</span><span class="s1">&#39;$cookieStore&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;$cookies&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$cookies</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC151'><span class="cm">         * @ngdoc method</span></div><div class='line' id='LC152'><span class="cm">         * @name $cookieStore#get</span></div><div class='line' id='LC153'><span class="cm">         *</span></div><div class='line' id='LC154'><span class="cm">         * @description</span></div><div class='line' id='LC155'><span class="cm">         * Returns the value of given cookie key</span></div><div class='line' id='LC156'><span class="cm">         *</span></div><div class='line' id='LC157'><span class="cm">         * @param {string} key Id to use for lookup.</span></div><div class='line' id='LC158'><span class="cm">         * @returns {Object} Deserialized cookie value.</span></div><div class='line' id='LC159'><span class="cm">         */</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">$cookies</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span> <span class="o">?</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">fromJson</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">:</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC166'><span class="cm">         * @ngdoc method</span></div><div class='line' id='LC167'><span class="cm">         * @name $cookieStore#put</span></div><div class='line' id='LC168'><span class="cm">         *</span></div><div class='line' id='LC169'><span class="cm">         * @description</span></div><div class='line' id='LC170'><span class="cm">         * Sets a value for given cookie key</span></div><div class='line' id='LC171'><span class="cm">         *</span></div><div class='line' id='LC172'><span class="cm">         * @param {string} key Id for the `value`.</span></div><div class='line' id='LC173'><span class="cm">         * @param {Object} value Value to be stored.</span></div><div class='line' id='LC174'><span class="cm">         */</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">put</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$cookies</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">toJson</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC178'><br/></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC180'><span class="cm">         * @ngdoc method</span></div><div class='line' id='LC181'><span class="cm">         * @name $cookieStore#remove</span></div><div class='line' id='LC182'><span class="cm">         *</span></div><div class='line' id='LC183'><span class="cm">         * @description</span></div><div class='line' id='LC184'><span class="cm">         * Remove given cookie</span></div><div class='line' id='LC185'><span class="cm">         *</span></div><div class='line' id='LC186'><span class="cm">         * @param {string} key Id of the key-value pair to delete.</span></div><div class='line' id='LC187'><span class="cm">         */</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">remove</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">$cookies</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}]);</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'><span class="p">})(</span><span class="nb">window</span><span class="p">,</span> <span class="nb">window</span><span class="p">.</span><span class="nx">angular</span><span class="p">);</span></div></pre></div></td>
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
      <li>&copy; 2014 <span title="0.05560s from github-fe123-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

