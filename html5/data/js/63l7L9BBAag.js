﻿window.globalProvideData('slide', '{"title":"Pick One","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":9,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide9","width":720,"height":405,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"63l7L9BBAag","actionGroups":{"ReviewInt_64MZN1kH4ET":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6XxA91ePTfD"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6eNxMrprhZA"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6MtitOe9C1o.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"64MZN1kH4ET_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"64MZN1kH4ET_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_64MZN1kH4ET","typea":"var","valueb":"6U8iRFdhbHM","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6U8iRFdhbHM.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_64MZN1kH4ET"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6U8iRFdhbHM.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_64MZN1kH4ET"}]}]}]},"ReviewIntCorrectIncorrect_64MZN1kH4ET":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6XxA91ePTfD"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6eNxMrprhZA"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_64MZN1kH4ET":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_64MZN1kH4ET"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_64MZN1kH4ET":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6XxA91ePTfD"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6eNxMrprhZA"},"enabled":{"type":"boolean","value":false}}]},"64MZN1kH4ET_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6MtitOe9C1o.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6U8iRFdhbHM.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_64MZN1kH4ET"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6MtitOe9C1o.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6MtitOe9C1o.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_64MZN1kH4ET"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_63l7L9BBAag":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6J3lfzvhV3j"}}]},"NavigationRestrictionPreviousSlide_63l7L9BBAag":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000101"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6qwEbJzTXiJ","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6qwEbJzTXiJ","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_64MZN1kH4ET","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_64MZN1kH4ET"}],"elseActions":[{"kind":"exe_actiongroup","id":"64MZN1kH4ET_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_64MZN1kH4ET","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_64MZN1kH4ET","typea":"var","valueb":"6U8iRFdhbHM","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6U8iRFdhbHM"},"completed_slide_ref":{"type":"string","value":"_player.6fHWBllp1QI.6J3lfzvhV3j"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_64MZN1kH4ET","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_64MZN1kH4ET","typea":"var","valueb":"6U8iRFdhbHM","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6U8iRFdhbHM"},"completed_slide_ref":{"type":"string","value":"_player.6fHWBllp1QI.6J3lfzvhV3j"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_63l7L9BBAag"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_63l7L9BBAag"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":25091,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6jiTcVLln0a"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6XxA91ePTfD"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6eNxMrprhZA"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6nHCLpfNbJG"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5jROrjGuPAx"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5XeqoyG3CdE"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":359.5,"rotateYPos":202,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":723,"bottom":408,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":85}},"html5data":{"xPos":-3,"yPos":-3,"width":726,"height":411,"strokewidth":5}},"width":720,"height":405,"resume":true,"useHandCursor":true,"id":"6jiTcVLln0a"},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6bVtqIZOvZw_-648964285","id":"01","linkId":"txt__default_6XxA91ePTfD","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":70,"height":52,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"1","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":1,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":50,"bottom":42,"pngfb":false,"pr":{"l":"Lib","i":145}}}],"shapemaskId":"","xPos":-110,"yPos":2,"tabIndex":1,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":45,"rotateYPos":31,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":90,"bottom":62,"altText":"1","pngfb":false,"pr":{"l":"Lib","i":143}},"html5data":{"xPos":-1,"yPos":-1,"width":91,"height":63,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":90,"bottom":62,"altText":"1","pngfb":false,"pr":{"l":"Lib","i":144}},"html5data":{"xPos":-1,"yPos":-1,"width":91,"height":63,"strokewidth":0}}}],"width":90,"height":62,"resume":true,"useHandCursor":true,"id":"6XxA91ePTfD","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"6XxA91ePTfD_6r0mUZbD1I4":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#InterventionScore","typea":"var","valueb":1,"typeb":"number"}]},{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.6nHCLpfNbJG.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_this.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_this"}}]},{"kind":"exe_actiongroup","id":"_this.ActGrpClearStateVars"},{"kind":"exe_actiongroup","id":"_this.ActGrpSetCheckedState"}]}]},"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6eNxMrprhZA.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6eNxMrprhZA._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6eNxMrprhZA"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"69YRv9ZgJkz_1053725461","id":"01","linkId":"txt__default_6eNxMrprhZA","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":70,"height":52,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"0","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":1,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":50,"bottom":42,"pngfb":false,"pr":{"l":"Lib","i":301}}}],"shapemaskId":"","xPos":-110,"yPos":79,"tabIndex":4,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":45,"rotateYPos":31,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":90,"bottom":62,"altText":"0","pngfb":false,"pr":{"l":"Lib","i":143}},"html5data":{"xPos":-1,"yPos":-1,"width":91,"height":63,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":90,"bottom":62,"altText":"0","pngfb":false,"pr":{"l":"Lib","i":144}},"html5data":{"xPos":-1,"yPos":-1,"width":91,"height":63,"strokewidth":0}}}],"width":90,"height":62,"resume":true,"useHandCursor":true,"id":"6eNxMrprhZA","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"6eNxMrprhZA_5aVPxdZxG8W":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#InterventionScore","typea":"var","valueb":0,"typeb":"number"}]},{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.6nHCLpfNbJG.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_this.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_this"}}]},{"kind":"exe_actiongroup","id":"_this.ActGrpClearStateVars"},{"kind":"exe_actiongroup","id":"_this.ActGrpSetCheckedState"}]}]},"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6XxA91ePTfD.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6XxA91ePTfD._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6XxA91ePTfD"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5seZXAkzQ9o_1502744670","id":"01","linkId":"txt__default_6nHCLpfNbJG","type":"acctext","xPos":4,"yPos":2,"xAccOffset":4,"yAccOffset":2,"width":175,"height":60,"valign":"center","wordwrap":true,"textshadow":true,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"SUBMIT","style":{"fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","ascent":19.952,"descent":5.469,"leading":0,"underlinePosition":-1.404,"underlineThickness":0.93,"xHeight":10.19,"fontIsBold":false}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":6,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":14,"fontIsBold":true,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"shadow":{"offsetX":0.8,"offsetY":0.8,"color":"#969696"},"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":129,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":159}}}],"shapemaskId":"","xPos":97,"yPos":216,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":91.5,"rotateYPos":32,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":149}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":149}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":1}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":150}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":149}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":1}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":149}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":1}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":150}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":151}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":152}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":151}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}},{"kind":"state","name":"_default_Visited_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":151}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}},{"kind":"state","name":"_default_Visited_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":152}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Visited_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":151}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":153}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":154}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":155}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":153}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":154}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":155}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":156}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":157}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":158}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":156}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":157}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Visited_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-2,"top":-2,"right":184,"bottom":64,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":158}},"html5data":{"xPos":-2,"yPos":-2,"width":186,"height":66,"strokewidth":3}}}],"width":183,"height":64,"resume":true,"useHandCursor":true,"id":"6nHCLpfNbJG","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"toggle"},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_this.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.6XxA91ePTfD.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.6eNxMrprhZA.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.6MtitOe9C1o"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6qwEbJzTXiJ.InvalidPromptSlide"}}]}]},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6fHWBllp1QI.6J3lfzvhV3j"}}]},{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.6XxA91ePTfD.6XxA91ePTfD_6r0mUZbD1I4"},{"kind":"exe_actiongroup","id":"_parent.6eNxMrprhZA.6eNxMrprhZA_5aVPxdZxG8W"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5jROrjGuPAx_-185934936","id":"01","linkId":"txt__default_5jROrjGuPAx","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":548,"height":32,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Click the button below to submit your answers?","style":{"fontSize":18,"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":25.652,"descent":7.031,"leading":0,"underlinePosition":-1.805,"underlineThickness":1.195,"xHeight":12.844}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":46,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":549,"bottom":38,"pngfb":false,"pr":{"l":"Lib","i":161}}}],"shapemaskId":"","xPos":76,"yPos":24,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":284,"rotateYPos":21,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":568,"bottom":42,"altText":"Click the button below to submit your answers?","pngfb":false,"pr":{"l":"Lib","i":160}},"html5data":{"xPos":0,"yPos":0,"width":568,"height":42,"strokewidth":0}},"width":568,"height":42,"resume":true,"useHandCursor":true,"id":"5jROrjGuPAx"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":53,"id":"01","url":"story_content/6WSkJLWce2w_M_1542_1542_P_0_0_1253_1156.png","type":"normal","altText":"Mabel","width":682,"height":629,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":363,"yPos":90,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":171,"rotateYPos":157.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":342,"bottom":315,"altText":"Mabel","pngfb":false,"pr":{"l":"Lib","i":162}},"html5data":{"xPos":0,"yPos":0,"width":342,"height":315,"strokewidth":0}},"width":342,"height":315,"resume":true,"useHandCursor":true,"id":"5XeqoyG3CdE"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"64MZN1kH4ET_CorrectReview","id":"01","linkId":"64MZN1kH4ET_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":164}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":163}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"64MZN1kH4ET_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"64MZN1kH4ET_IncorrectReview","id":"01","linkId":"64MZN1kH4ET_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":166}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":165}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"64MZN1kH4ET_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');