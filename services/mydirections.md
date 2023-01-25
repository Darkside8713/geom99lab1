# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL


https://maps.googleapis.com/maps/api/directions/json?origin=Hamilton&stop=Niagara+Falls&stop=peace+bridge&destination=Walden+Galleria&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE

## Next paste the full JSON response to this query here:

{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJj3feJ2yYLIgRIQ7f2Fbuais",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "partial_match" : true,
         "place_id" : "ChIJCZUtqb0M04kRtmuDGnIWLHk",
         "types" : [ "establishment", "point_of_interest", "shopping_mall" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.2698078,
               "lng" : -78.7617602
            },
            "southwest" : {
               "lat" : 42.9097369,
               "lng" : -79.8707187
            }
         },
         "copyrights" : "Map data ©2023 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "118 km",
                  "value" : 118094
               },
               "duration" : {
                  "text" : "1 hour 21 mins",
                  "value" : 4831
               },
               "end_address" : "1 Walden Galleria, Buffalo, NY 14225, USA",
               "end_location" : {
                  "lat" : 42.9156841,
                  "lng" : -78.7617602
               },
               "start_address" : "Hamilton, ON, Canada",
               "start_location" : {
                  "lat" : 43.2553768,
                  "lng" : -79.87027260000001
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "17 m",
                        "value" : 17
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 43.2552335,
                        "lng" : -79.87034179999999
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e toward \u003cb\u003eHwy 8\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ci_gGdtnfN\\L"
                     },
                     "start_location" : {
                        "lat" : 43.2553768,
                        "lng" : -79.87027260000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "32 m",
                        "value" : 32
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 43.2553256,
                        "lng" : -79.8707187
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eHwy 8\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "eh_gGrtnfNSjA"
                     },
                     "start_location" : {
                        "lat" : 43.2552335,
                        "lng" : -79.87034179999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "32 m",
                        "value" : 32
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 15
                     },
                     "end_location" : {
                        "lat" : 43.2555998,
                        "lng" : -79.87061
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eHwy 8\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yh_gG~vnfNu@U"
                     },
                     "start_location" : {
                        "lat" : 43.2553256,
                        "lng" : -79.8707187
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1150
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 152
                     },
                     "end_location" : {
                        "lat" : 43.2521484,
                        "lng" : -79.8572305
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eHwy 8\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oj_gGhvnfNDYF]Hg@V_BXmBLy@T}AXsBDUDUVaB^iCNiALo@z@qFVuA\\iBv@cELw@vAsHLs@p@wDx@cF|@uF"
                     },
                     "start_location" : {
                        "lat" : 43.2555998,
                        "lng" : -79.87061
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2064
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 279
                     },
                     "end_location" : {
                        "lat" : 43.2698078,
                        "lng" : -79.84939319999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eVictoria Ave S\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}t~fGtblfNyBu@kAc@{EaBmHiCiGiBk@QsAe@wHoC_GoByAg@cA_@CAEAo@WgAa@e@Q{@Y}@YaBi@o@SEAcAY{@Y}B{@{@[}@[yAe@{G}Bg@QgC}@_GqBcA]"
                     },
                     "start_location" : {
                        "lat" : 43.2521484,
                        "lng" : -79.8572305
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1641
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 144
                     },
                     "end_location" : {
                        "lat" : 43.2648583,
                        "lng" : -79.8304023
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBurlington St E\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "icbgGtqjfNn@sD@i@pAeHr@wDh@_DRkAJi@VaBp@uEVu@^cBLqABg@LeAHq@Jq@NeA\\yBVaBLgAL{@T{AH}@TsARoAXsAbA{DViA\\s@l@}ANe@Pq@LsAHgA\\}DZeBNaATeB@EXwB"
                     },
                     "start_location" : {
                        "lat" : 43.2698078,
                        "lng" : -79.84939319999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1690
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 145
                     },
                     "end_location" : {
                        "lat" : 43.2599502,
                        "lng" : -79.81069029999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBurlington St E\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBurlington St Opas\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Burlington St E\u003c/div\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "kdagG~zffNBy@JeABYFg@?CJq@He@Jo@@GRuA`@cCBOFk@Jq@d@wC?AN{@PiA?CPaAN{@TiABKLq@Lk@FQLQ\\wBl@qD~BaOvBcNtAeIJm@d@kCrAcId@kC|@mHL_A"
                     },
                     "start_location" : {
                        "lat" : 43.2648583,
                        "lng" : -79.8304023
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 197
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 43.2594712,
                        "lng" : -79.8083532
                     },
                     "html_instructions" : "Take the ramp on the \u003cb\u003eleft\u003c/b\u003e to \u003cb\u003eNikola Tesla Blvd\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "ue`gGx_cfNBm@f@_EHk@Hm@?ADY?ABQJm@Hm@"
                     },
                     "start_location" : {
                        "lat" : 43.2599502,
                        "lng" : -79.81069029999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.1 km",
                        "value" : 3052
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 142
                     },
                     "end_location" : {
                        "lat" : 43.2588501,
                        "lng" : -79.77187189999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eNikola Tesla Blvd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ub`gGdqbfND]DQZgB?EZaB@GJc@d@gCTkAF]Jg@ZaB?ALi@X{A@ELq@VsALq@f@mCJc@BOLs@DWJo@DSBOF]Jo@D[RqAHk@DWRsAL{@Jk@Fi@Hi@D_@Dg@BUB]B_@BWBi@BSBm@?YBi@Bw@?S?gB?kA?W?g@Am@?M?cA?i@AkB?qBAmA?iAA_B?u@A}A?aAAsA?uCAaB?aB?KA}A?k@?m@CoD?oBAuA?eC?e@@eA?k@?O@kA@uA@m@?S?U@k@?m@@W?[@q@?q@@o@?o@AeA?I?UAU?YCk@Ck@ASCm@Ek@ASAKC[KgAMaAGg@Kk@Ii@EUAIGWEWGUEQEUGSGUGWGWOo@GUGUGUGQGUEQCKKa@EKEQEOGWOi@a@aBMe@Kg@ESEUMm@Ii@Ku@Ee@AOGm@ImA?CCs@AW?WASA{A"
                     },
                     "start_location" : {
                        "lat" : 43.2594712,
                        "lng" : -79.8083532
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "52.8 km",
                        "value" : 52792
                     },
                     "duration" : {
                        "text" : "29 mins",
                        "value" : 1740
                     },
                     "end_location" : {
                        "lat" : 43.1527316,
                        "lng" : -79.1530554
                     },
                     "html_instructions" : "Take the exit on the \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eQEW\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eQueen Elizabeth Way\u003c/b\u003e toward \u003cb\u003eNiagara\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "y~_gGdm{eN?iBA}B?s@?yA@M@C?SBS@K@O?CBO@MFYDQFWH[JW@AJUFMJODKJOTUXYLKDEPMHGZSLGb@YFEVQ~@k@FEd@[NK^WHE`As@x@k@XSJIZU@??ANc@`@WVQLGPMb@WBCRMZSJGTMZSXQd@[f@[b@WVQRMRKPMz@i@RM\\UZQBCLIp@c@BAVOROPKPMTMRMJIDCRKXSJGRMRO@ANKTM`@Wx@g@f@[VO`@W~@k@pBkALIb@YRMBCHGHGVUb@_@`@_@@C`@c@NSLQPUNSNULULULQN[P[HSJUDKDKJYJWJWHYL_@FWFQ@GJ[Ns@Lm@@GF_@RsAF]Lu@Jq@@IXsBL{@He@RsAJq@RwAL{@Jo@`@mCLy@~@iGl@}D`@kCb@oCT{ADYDWd@cDZqB@GFa@RqANaARoA?EJi@Jw@Ha@BUXiBJo@h@qDn@gEZoBL}@DYDYHi@Lq@Js@Js@BMHg@F_@@Kp@mENgAVaBF_@z@{FDWT{AN}@TyAHk@RsARuAZqBRqATyALw@RqARuARsAL{@ZmBRsARuARuALu@RsAZsBZmBL{@RsARuATuARsAZsBRsATwARwAZqBRuATwAJu@XeB@MTsAJy@TuAXqBZqBTuADYL{@RsATuAJw@Ly@F_@DWLy@Js@NaARsATuARuARoAJs@Fa@TwADY@IDULu@Jy@Ly@Ly@Lu@ZuBL{@Hi@BORsATsAHi@Hk@?AJo@@EPoAN_ATwAViBJi@Fc@Hk@BKNgALs@?ERsAFYRyAHe@PkATuA`@oCTyARoARuAZqBZqBRsAL{@DYTuAJy@F]RoATyABUh@mD@ARwARoAFc@TuAL{@RqALy@L{@RsATuALy@RsARuALw@RsALy@Hg@BSTuARuARqAN}@L_ALq@Ly@RuALu@RuA@GZsBZsBHk@TuARsALw@Hg@Ho@TuAL{@DWLy@RsAFa@Lu@RqARuALy@DYF]TwAJw@Ly@TsALy@Jw@RsALs@Ju@RoARmA@G^aC@KHk@Lu@Ly@BUTuAXoBJs@TsAL{@Lw@bC_P`AqGF]XoBZoBDWZwBNcABOTuAXoBL{@TuARuATuAXmBPgA@KL{@ZoBRuATuANaAPgAL_AJk@@KHk@Hg@T{A@IJk@Hg@NiAZqBRsAF[F_@L{@PkA@EPoA@CRwA`@eCRuAZoBXkBRqARsADYPgAPmAZoB^gCh@iDDY^eCj@uDPkANaAHi@T{A^cCZkBFe@RuARsAXeB@IFc@He@^aC`@mCZoBRsA?Cd@}Ch@iDBMRsANcABML{@ZmBBSHe@XsBTuAZoBRsA`@oCHk@BO`@kC`@kC@GJm@ZyB`@cCLy@F_@Jq@L{@`@kCRsAZqBFa@L{@Lq@RsABOj@uDLy@T{Ad@yC@KTsAZuBL_AXmBd@{Cf@aDf@cDHg@XkBHk@^cCHi@DWRmARuAb@qCZqB`@mCp@oEJo@fAeHXkBn@gE`@kCv@aF`@qCN_A`@iCf@gDb@qCLu@TyA`@qCN{@NaAHm@Lu@N_ADW^eCZuBdB_Lt@cF@EXiBp@kE`@mCb@uCBI@IjAwH\\_C@ItA{I^cCXoBn@gEn@aETyA`@iCTwAn@cEXmBBSZoBLy@RoARwAzAuJXoBN{@Fe@Jo@p@iEJq@`@qCTsA?AZuBRmARsARuAV{AJq@ZqB^iChAkH^eCRmAp@mEVcBh@mDZuBRqATuAh@kDh@mDRuAb@oCLw@RuALw@@ERqAN_ADUTuADYF]RsAFa@R{A^}B@M`@kC@GRuAJk@`@qC@IPgAf@eDBWTwABMPmAZmBPkA`@mCN{@Ho@RkAT{ANcA^cCLs@Jq@Hm@bAqGNcAXiBVcBHi@PgAp@mELw@Jq@d@_D@AZsBRoANcAFa@^aC\\}Bv@eF\\wBDYT{A@EHi@ZsBVeBBOJm@BSF[Hk@\\yBHi@d@}CJk@l@{D\\{B^aCPiAJq@T}A^cCVeBNaAPsAPmAZyBPwAHm@NoAFa@Fo@\\qCLeAHu@LiAViCD[JiAFk@LmAHeAFq@RyBB[ZkDF{@?CJkADi@@SJ{A@GDs@HiAFeAB_@Do@Dw@DgABiABaABw@?G@iA@o@?m@@qA?_A?s@?[AaD?m@?sB?_CAw@?iD?uA?Y?mBAsA?gEAaD?iB?y@AsI?yBAcF?eEAoE?{C?{@AgD?eDAcH?M?uB?mA?sCAaC?oA?eA?oB?IAuA?sB?}C?aAA_@?sA?_@?U?[?q@?kA?_BA_B?qA?eDAwB?sC?iA@_@?U?]@mB?k@BaB@gBBaC@q@@}ABiBH_I@U@uA@uABwA@uBD}BBeDDeEBqA?o@BeBBeC@i@@kAB}CFyEDiD@oA@u@@sADiDAw@DqE?CHeHFmG@y@L_MJgJHeJByA@sBByBFqEDkFFoFBuBByB?Y@y@FsEBsB?aAFmEDmEDeD@sABeBBmDBuBD}C@mBBsA@}@@wAByB@iA@gAByA@mA@oABmA?_AB{@?a@@u@@yA@g@@u@@cA?E@q@@oA@k@@iA@mABwA@kA@y@@cB@e@@{@@uAByA@sB@aABqA@wAByA@cA@oA@aA@mA@aABaBBmB@wBB{ADgEBwB@mAP_Pd@}c@x@qy@RuQHiH@eBBgABiC?_@BwA@yA?[DoD@y@BgB?k@DsC@}@@kA@y@BwA@wB@sA?}A?_AA]AsAIcNKkNAeCAcBAW?{@A}AAqAAmA?KAW?c@?y@?IAm@?w@@cB?u@@y@BkA?Q@]BkABgABu@DkAFsABm@FcAF}@\\gELmATcC`@sDXkBNgADa@FWVcBJi@Hg@H]@EHe@VoABMDO\\_BJe@H]@CH_@ZmA@ENk@?ANi@J_@@Cr@cC?AJ_@Vu@Lc@Vu@FSFWJYDORk@h@eBj@iBhAoDl@mB\\iAbBoFpAaEj@mBZcAd@eBT}@TcAJa@ViAj@oCLu@Ny@\\_CFg@Jy@Jy@Da@b@cELyAJgBFy@Bo@B_@@c@Bk@Bw@@I@g@@s@B{@@w@@Y@y@@{B?c@AyB?CE_FAqBEqDAkA?IAaBGyHAK?g@?GAq@Au@EaGAaA?[Ak@AkAAgAC}EAc@C_DCwCA_AEqFGaGEuE?u@CsBAuCEmDA{@?[A}BC_EA_B?_ACsEE_G?CEcHCgE?gAAg@A}AAiBCuDI_KKiMC{DAq@Aq@?k@AmBAsAAiF@iD?Q@y@?o@B{ABeAHeDBqABa@@c@HwBD_ABo@Bq@Bq@DcABs@F}ANaELcDRoFFsADkAFwAJoCF{A?EFyARwEJsCH_CJcCJiCJyCBi@Bi@Bw@PqE@QFwAB_A?EFeAHqB?EHwBF_BHeBH{BDoAB_A@AB}@FiA@YDcAJmC@YFiBF}AHsBFwABk@LkC@]LuDD{@B}@b@eLDaABe@RmFLyC@g@HcBRsFFiABaA@o@@u@?C?_AAy@CoAAe@Ew@Gw@G{@SsBIk@SoA_@qBUwAu@}DYaBu@aEGYgAgGKe@QeAOy@q@yDEa@M{@Ec@Ky@Gm@KwAKu@Aa@GeAAaA?WAa@?Y?{@@cA?]@a@@[@[B_AFgADs@D_@Fw@J_AHy@Hk@b@aEDYLkAJcAL_ADa@BUHu@NsARgB@IVuBD_@LoA\\yCr@oGf@uEHm@b@_ERmB`@gDPeBLaAd@kEdAmJl@qFd@_Ep@iGHs@L_AFc@NsAb@oDh@}E^iDToBFg@J_ATyB~@mIl@oFhA}JNmAP_BD_@NyAPyAZkCLcATcBVoBh@oDnAiIpBuM`AqGDY`@mCt@uE@Gt@_F\\{Bt@_Fv@eFLw@v@iF^_C\\_CTyAD[^_CJk@^iCJq@b@sC@IFa@ViBTcB`AmGJw@Lw@Fi@Fg@Jy@BSLoAHaAHcAD_@B_@F_AFmAJmB@g@Ba@Bw@B_A@_@@aA@i@?k@@y@?W?c@@w@?}C@qF?{B?_BBQ?w@@_@?K?a@?]?U?e@?]?]?{@@{@?_@?[?wD@cA?eA?aD?mA@cE?y@?[@{A?]?]@]@]?_@@[B]@_@@[B]B]B]B]B[B_@D[B[D]D]BMHk@D[FYDYF_@F]H[Nu@H[H[ZmAJ[HYTu@La@XaAJ[FU@CTs@HYHYH[JYLc@jAwDDQTu@HYBGFUhAqDv@iCTw@Pm@@AFSNe@FUJ]\\iAL_@X_AFQDOHYHY@AHWHYHYHYJYFWJ[@AFUHYHYHWJ[HWHYHYJYHYRq@La@Rq@H[^oAJYHYh@iBHWJ[HWHYJ[^oARs@Ts@Ts@r@cCJYH[H[JYHYFYHUFUDQZgAVcANk@J[l@_Cf@qBn@cCFQH]T_Af@mB`@}AnA}EZoAx@}C`@_BRu@^{AbAwDvBoIRw@d@gBVaADOHYFYHYHYH[FWHYHYF[HYHYFYHYHYH[HYFWH[HYPu@Po@H]HYHYLc@BOLe@DOHYFYHWH[FYRu@x@yC^oAf@uAjA_DPi@Vu@"
                     },
                     "start_location" : {
                        "lat" : 43.2588501,
                        "lng" : -79.77187189999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "7.1 km",
                        "value" : 7058
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 246
                     },
                     "end_location" : {
                        "lat" : 43.1534331,
                        "lng" : -79.0719854
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork to continue on \u003cb\u003eGeneral Brock Pkwy\u003c/b\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "qgkfGrqbbNAi@?CDMNg@BKNg@HYH[J]FYHYH_@F[Nu@D]D[D]D[B[D[@[B[B]@[@[@]@_@@[@[?]?[A[?]A[AM?OA[A[CYA]A[C[?KAQA]C]A[C]?IAQA[C[A]C]A]AMCi@A]C]GyAA]C[A]A[Ey@E}@A[Ey@A]C]A]C[A[C_@A[C]A]AYA]C]A]C]A]C]AYA]C]A[C]A[A]C[A]A]C[A]C[A]A]C[A]C[A]A[C]A]C[A]A]C]A[A]C[A]C]A[A[A]C]A[A]A]A[A]A[C_@A]A[C{@A[A]A[A]A]A[A_@AYA]A]A]?]Ay@A]?W?a@?]?]?]?Y?_@?]@]?[?Y?C@]?[@]@_@@[@[@]@]@]@[@]B]@[B]@[B]B]@[B[B]B]B[D]B[B[B[D]B[D]D[B[BQ@KD[D[D[D[D[F[D]F[D[F[DY@GDSD[F[F[D[F[F[F[D[F[D[F[FYBQBKDYF[DWF_@DYF[F[D[FYF[D[F_@F[F[D[F[F[DYF[BOBKD]F[FYD[F[F[?EDWF[F[DYF[F[D]FYBMBOD[FYD[F[F[F[D[F[F[D[F[F]DYF[DUBSDUDSDUBSDSDUBSDSDSDUBSDS?ADSBSDUDSDUBSDSDUBQ@ABSF[D[F[F]DYF[F[DYF[@EDUD[F[Lw@FYD]F[Nu@D]BIFc@Hg@P}@^yB^{BXeBX}ATwAPcAXeBXaBZgBTqAFc@\\mBXgBl@iDJm@\\sBP}@Lw@Ny@BOTyA\\qBj@aD\\uBN_ALs@XgBNy@Fe@DUBUFa@D]D]De@Dg@Dk@Dk@@[BWBaA@w@@o@?Y?U?e@Ai@Ck@Ao@Cg@Ca@Ee@Ce@Gy@Ga@Gg@?CG_@Ii@EWIg@S_AI_@Og@Qs@So@So@Qc@Sk@KUKWEKSa@KWQ[IO]k@OWSYKQUYGIOSQS_@c@QQg@g@e@e@IISOOQGG[[OMQSQOOQIIW[OQOSQWMQOSCGYe@GKCGMUMWCGIOKUISACKWQg@CIKYIYIYEMCKI[I[EOCI_@eB]wAYoAWeAo@qCU}@cAkEQs@Qu@Qu@cAoE_A_E_@aBS}@WcAQy@WiAAGKk@I]EYG_@AIIk@ACGg@Ig@M_ACSG]Gg@"
                     },
                     "start_location" : {
                        "lat" : 43.1527316,
                        "lng" : -79.1530554
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.4 km",
                        "value" : 2447
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 108
                     },
                     "end_location" : {
                        "lat" : 43.1531557,
                        "lng" : -79.04447549999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eGeneral Brock Pkwy\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering the United States of America (New York)\u003c/div\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "}kkfG|vraNIm@SoAE]E[EUKs@AEOmAMy@EWKw@Ku@M{@Kw@G[Ku@EYE]Mw@E]E]Ks@Mw@Ku@Ge@COKy@My@E[Ig@Ik@E_@Ks@G]E[Ks@Ik@E_@OcAEYG_@E[Kw@Mu@Kw@SuAE]AIOgAEYSuAIi@Im@Ga@OiAO_AIq@Mu@Gg@Im@My@Kw@Ii@OgAMw@Ky@Mw@E[E]Iy@AYC]?ACYA]?a@?S?Y@I?Q@WBS@UBSBM@EDUDSFSFS?CFODQFUJWXcAPe@d@uAh@sAZu@Xg@j@cAHYPYhAqB~@}A`@m@p@{@|@}@VURQLMLM@CHOLWDO?APq@J_AFg@B}@@WDwAAmB?i@Bs@@_AD}@LmC"
                     },
                     "start_location" : {
                        "lat" : 43.1534331,
                        "lng" : -79.0719854
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "23.8 km",
                        "value" : 23768
                     },
                     "duration" : {
                        "text" : "15 mins",
                        "value" : 908
                     },
                     "end_location" : {
                        "lat" : 42.98883319999999,
                        "lng" : -78.91764999999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eI-190 S\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "polyline" : {
                        "points" : "gjkfG~jmaNFaAHeADm@Fg@?E@CDa@Fo@@I@CD[JcALiABWNaBHyAH{AP_CJyAFeAFiALkBJ_Az@_EJo@Fo@NeB@a@@MBi@?O?GCq@Gu@AY?q@AIByA?SBiAB]?GDc@HcAJgAJs@J{@Jw@PaARiADQR{@Rw@\\oAX}@j@_BRk@FOBGd@kAVo@LWVo@Xo@Ra@FMJULWLULWLWLUZk@LUNYZk@HMBEn@gAV_@T]LSXa@DGNQLQHKTYHIp@w@Z[NOHGLKRQ\\[\\U\\UPKJGLGPKLG@ATKNGPILEFCTGPGNEHA`@KVERETC@?TEJA\\CHALATA^A@?hA?h@?fAAJ?|@?p@A\\?z@?N?`A@bAA\\?P?n@?t@?hA?h@AJ?PAZAVC\\CLAZEFAZEVETC`@IZIRGTG@?^KJEf@OZI`@MTGl@SJEPE\\Kj@QJEl@Q@Al@Qt@UfA]f@ONGj@Q|Ag@v@WdA[pAa@p@SDAfA]jA_@JEl@QXI`@MXIDAp@S`Bg@ZKf@Oh@Qp@S|@Y`A[t@UFAb@Od@OVIx@Wj@Qd@OJERGTGRGRIDANERITGRIRITKRITIPKTKRKRKJGFERKRMPMPK@ARMPOROPO@A`@]ROPQPQPQNOPQPSNQ@?NSNQNSFIHKNSNSNUDGFKNULUNULULWLUNWJWLULWJWLYJWJWJYJYJWHYJ[HYJYHYH[HYBOBIH[FYF[H[F[F[@G@GBKF[FYF[@EBMFYDYF[FY@IFUDWF[FYF[F[F[F[FWF]F[F[F[F[FYF]FYF[F[FYH[F[FYHYH[HYH[HYHYHYHYHYJYJYHWJYJWJYJWJYJWLWJWJU@CJULWLULWJULWJOBEJUNULUNULUNSLUNSHMDGNSNSNSBEJMPSNSDGHINQPSNQPSPOJMBCPQPOPQNOROPQBALKROPOPORMPORMPK@APMRMPKRMRMRKRMRKPMRKRMRKRMPKLIFCPKRMRKRMRKRMPKTMRKPMRKRMRKRMRKPKRMRKRMPKRMNIBARMRMRK\\SRMPKPKTMf@[RKRMPMRMPMROPMRORONM@APOZ[FEPQPQPQNQPQNSPSNQNUNSNSNSNUNULSLUNUBGXe@LU?AJSLWLWJWLWLWHSL]JWL]Na@J[J[HWH[HYHYH[HYF[HYH[HYRw@FYNm@Nk@HYHYFYH]HWPw@FS@EH[FYBEPs@Ps@Pu@Rw@Ps@Rs@H[J_@FUHYHYH[HYHWL]HULYJWJWJUNYDKFKLULUBEJOFKDINSPULQNSPQNSRQNQRQPODCLKJIDEPMRORMRMTKRKRKRKRIVIRITGTGTGREVETETCTCTCVCTAT?TAV?T?T@T@R@XBT@B@P@TDTDRDVFTDTHPFB?RHJBHDRHTJLFDBRJTLRLRLPLRNRLPPPLRRLJBBNLRRPNPNPPPPPNPPPNPPPNPPPPPNPPPNPPPPZXhD`DfAbAPPRPPNPPNNRPPPFDHHPPJJDDPNHHFFPPB@NLNNLLHHFDNN`@`@t@p@ZZVTf@d@`@\\@@RRPNBBLJPNPNJHFFPNFBHHRLRNPJRLRLJFDBTLRJRJRHFDJDRHJDFBFDXJ\\JRHTFRFNDXFVFTDRDTD\\DJBTBTBRBV@@@T@R@V@^@J@V?R@T?T?R?F?N?V?T?V?T?X?T?R?T?N?D?R?TAT?T?T?X?T?V?R?D?R?V?l@?H?J?J?J?v@AV?T?T?V?h@?B?P?h@?B?P?B?V?V?V?X?B?N?X?VAT?@?N?B?V?R?D?R?V?V?T?L?`@?Z?D?J?V?P?D?T?VAV?V?T?V?V?V?T?V?T?V?V?T?V?BAP?V?X?V?T?R?V?X?D?N?V?J?J?T?V?P?B?L?H?H?N?T?T?VAT?V?L?J?H?J?V?T?T?T?X?V?T?V?V?@?R?V?d@?z@AL?H?l@?jB?bCA^?vFCR?fAAd@?^?^?H?N?b@@X?@?j@@F?~@?pA?B?\\?j@?nA@TAJ?d@?HAn@AN?hA?lB@vA?nB?bC@hB?`B@H?J?b@?L?d@?P?LAX?`@AJ?f@CRA@?VAvAIrAIZC|BMTATATAPAVAT?R?rA?P?B?R?h@?b@?h@?V@pA?\\?J?hB?F?h@?n@?h@?X?r@?P?pA?j@?VAV@bAArD?h@@VAnD?d@?hA?dD?D?|B?J?T?l@?tA?n@?bA?jA?^?D?@?T?F?@?h@?`@?N?X?d@AF?L?z@CTARAd@C^Cd@ETCJA`@ERELA\\GTEVEREh@M^Ib@M\\I?AXI\\K`@Oh@SB?NIVI@Ax@_@n@[\\STMRKXQLGj@]d@WNK`Ak@^Ud@YPKTMf@YFErAw@XQv@e@h@[DAhAq@x@g@\\Sn@_@n@_@`Ak@`E_C\\UfCyAz@g@v@e@HE\\S@A\\SHERMJGXQz@g@bEaC^UlDuBlEgCTMjHiEh@[fAo@n@_@dDoBnAs@d@YXQb@WRKPMJEFERMRKRMLIFEPKDCLGPKRMRMzD{BHGPKRMRKRMRKPMRKTOPITOPKRMZQ\\STMRMPKRMRKRMPMBANIRMRKRMTMjAs@PKTMRMRKRMPKRMRMRKFEJGPKTMFEJGd@Y@?d@YRKRMRMPKRKRM~EuC\\Sh@[PKTONIRMRM\\SFCRMRMRKRMd@Yh@YPMBAPKPKPKTMPKf@Yf@[f@YDEp@_@DCLIRMf@[DCLITOPMPOTONMPORQLKRSNOBAPSFGXYNQPSFGFIPUNQLSRUFK@AR[LQR[JQLSNWHODGJQLWFKDKHSLWBEHQBEFQLYLYHWDGFQHWL[@CDQJWL_@?ARm@Tw@@AFWTs@`@qABGBIXaADILc@ZeA@AJ[^kARu@HWDIDOTu@Ts@HYBGX}@Vy@BMZaAHWNe@fB}FJ[BGBIJ]HYTs@Rq@DMNe@Ro@FS\\gADQZaADKV{@La@FQFUNe@Ro@L_@p@{BLa@^mABGVu@DOJ[FUJ[\\eAPo@^kAHWFSL_@BIDMJ[Ne@Le@f@}A|@oCTq@Vq@FUJYj@aBZu@Tq@LYTo@Pc@L]^}@JWXq@BE\\w@Rc@f@eAt@}AXm@x@aBtCcGjAaCf@eAlAgCJSN[P_@f@cAVi@JSn@qADKLWRa@DKFKLWHQJWTc@FKRc@JSLUTe@~@qBfBoD^w@bAsBFOb@}@LW\\u@l@kAVk@v@}A`AsBXm@NWbCeFz@eBh@gAlAgCR_@Zq@\\q@h@iALWLWLWZq@LWNYLWFOPc@LYLWJW?AJW@GHQXs@HWL[L_@Ro@J]L_@BGV{@La@@IZiAT{@HYDOJc@@EPs@DO@ADSLe@FWBGJ]FUHWPk@Tu@BKXy@Z}@LY`@kAJYn@aBHYb@kAl@aBd@oA~AkE`@gATo@HWDKRi@@EFQJYJYJWJYHYXu@HUN_@"
                     },
                     "start_location" : {
                        "lat" : 43.1531557,
                        "lng" : -79.04447549999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 585
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 28
                     },
                     "end_location" : {
                        "lat" : 42.988035,
                        "lng" : -78.91165359999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e16\u003c/b\u003e for \u003cb\u003eI-290 E\u003c/b\u003e toward \u003cb\u003eI-90\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTonawanda\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRochester\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "egkeGhrt`NRKFMNWFMDGHM?A`@m@NUNULQJQBENSDGHKLUNUJUFMDIPa@H[FOFWBKF[@EDUBW@EBYB_@B_@?[?c@?YAc@AWC[E]E[CSAGI[G[IYKYKWKSKUKSWa@[i@AAGW"
                     },
                     "start_location" : {
                        "lat" : 42.98883319999999,
                        "lng" : -78.91764999999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "15.2 km",
                        "value" : 15206
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 565
                     },
                     "end_location" : {
                        "lat" : 42.95405170000001,
                        "lng" : -78.7662957
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eI-290 E\u003c/b\u003e",
                     "polyline" : {
                        "points" : "gbkeGxls`Nc@s@iAmBGIy@uAMUMUWg@MWWe@CIc@}@GMMYa@{@c@eAAEs@eBEO_@cAGSQi@[cASo@CKU{@EMa@_B_@_BQy@COCKGa@CKMk@EUIg@c@mCOeA?ASgBa@kDYiCe@gE?Ec@{DO{A]{CWaCQeB]qD_@kEg@}GWwDC[QyCKuBEu@m@yMAe@AC?OU_FASOmDIcBIcBKkCEu@IkBGmAEmASmEEeAIwACo@Co@MoCSkEKeCGmAAMKqCAUKsCIoCAm@?GE{BEkC?y@C{BAyEAiEAaBE{RCmEA_CCoBG{AG{AK_BM}A[gCe@}DMs@Ow@Qy@Ow@Sw@Qu@Qq@IUAGYcAGOEKQi@Qk@EIuAkDwA}CsBsEwA_DGOSg@c@aAq@aBM]Uu@A?]mAe@iBACe@}BUuAAEQmAKaAIy@IgACYGeAAKC{@A_@Cu@A}AAsA?W?{A?g@?cB@g@A_E?{@?_@?sC?iC?{E?oC?aB@q@Ac@?}@AmC?ECoBCgACu@Ag@Cm@EeAEi@AYG_AEu@IeAIeAKkACOEc@Gg@Iy@OeAAMIo@Ko@Ku@Ic@EWQkAQ{@Ou@UmAKa@COOm@EQOm@Oo@WaAIY]mAQs@AEc@eBWcAOo@Ke@Mk@I_@G[Ic@G[AKOaAE]E[Gi@EYCYAKAKEa@Ek@AUC]AUCYA]AKA]Co@Ak@A]?SAg@Ac@?A?s@?c@?c@@sA@y@@Y@w@D{@B}@Dy@Ds@@WFk@Dq@Fo@BQDe@J_AFe@Hq@Jq@Jo@BQHg@F_@H_@DSDWH_@Nq@H[DUJc@Ru@Ja@Rq@La@DMPk@Z_ARk@JWHUVq@Zs@JUN[Zo@d@aAPY\\m@LUNW^k@?ALSXa@DEbA{AT]zAuB^i@`@k@^k@^g@l@{@b@m@b@o@h@u@r@cA\\i@f@q@RYr@eAX_@p@aAp@aAr@cAp@_ALS|@oAd@o@NU@CNSl@{@JOf@s@b@o@Zc@^i@V]HMLQNSJOd@q@HMJMf@s@^i@PYf@s@Zc@d@o@\\g@`@i@b@m@NQ`@g@V[@Cd@g@V[`@c@X[@ATUVYVWb@a@`@]FGJK|@u@h@c@lByADExAgAbBkALItCuB\\Y\\W^[NMn@k@`A}@fAgAv@{@Z]\\a@X[JOX]X]`@i@X]j@y@T]Zg@bA_B?ABCv@qAx@}ALUXk@d@aAn@wAp@{AHO@EZs@p@{Ah@oAN[f@iAlCiGd@cAp@}ADKv@cBVq@FKLYt@cBN_@b@_A@Ab@aAJU`@{@LWZm@LWBCNYVe@Ra@HMDGXe@Zi@HMd@q@\\i@b@o@`@k@NULQd@o@^i@|@oA?ALOr@eA^i@lAeBd@o@`AwA`B}Bn@}@x@kAfBgCn@_Ar@aAl@{@l@{@r@cApAkBNU\\c@T]Xc@TYlAgB\\e@v@iA\\e@NSNSXa@^k@dAyA@CBCXa@LQt@aA`@m@^e@PS^e@@AT]HKRSPSPONQPOPQPOPQROPOPONK@ARORONKPMTOPKTOPKJEDETMRKPKTKRKPIRIVKTKRGPIFALGRGTINEFCd@MDAPEPERGVGTERERCTETEj@IVCRCTCLAdAIZCd@Eb@Et@Gl@Gd@ED?d@EfIo@rCUl@ETAj@GLAp@ETCTATATATAHAJ?XANAT?TAdAAT?TAP?L?\\?VAT?V?R?TAP?X?T?RAT?N?\\?RAT?J?HATAL?DAVAP?"
                     },
                     "start_location" : {
                        "lat" : 42.988035,
                        "lng" : -78.91165359999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.5 km",
                        "value" : 4508
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 173
                     },
                     "end_location" : {
                        "lat" : 42.9135953,
                        "lng" : -78.7665772
                     },
                     "html_instructions" : "Take exit \u003cb\u003e51-61\u003c/b\u003e to merge onto \u003cb\u003eI-90 W\u003c/b\u003e toward \u003cb\u003eErie\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "ymdeGj`w_NTNX?PAdA?j@Al@?V?h@?V?X?V?R?`A?\\?N?X?T?R?T?V?V?B?PATAVAB?XCLAVCTCTABARCRA@ARARCXCPCTCVCj@GTCNAv@IPAVCTCTAb@AJ?V?P?P?J@P?D@N?VBH@H@PBD?VDTBXFj@JL@JBRDRDh@HTDLB@?@?RKTDd@FRB@?^DRBR@N@VBT@Z@T@T?H?`@@\\?P?f@?ZAT?X?n@?R?X?P?T?V?TAV?V?T?R?V?\\?nB?V?VAN?T?V?T?J?H?V?X?^?`AAj@?L?`A?n@?V?V?T?T?@?R?VAV?T?l@?V?V?T?Z?P?T?V?T?hAAP?X?P?V?R?T?V?V?V?T?TAT?Z?j@?dA?|@?J?jBAl@?vA?N?^?`@Az@?R?`@?nA?r@@f@@Z?dA?bAAT@`A?dAAp@?bAAlB?J?bB?lB?`@?nAAB?v@?XA`@?x@?`@?@?t@?t@?~DAhA?b@?p@?VAB?dA?L?fA?d@AdA?B?l@?jA?~@?~@?z@?H?X?H?T?R?|@@R@N?f@@D?P?d@@f@?V@Z@n@@t@@nBB`@@z@BbA@V@l@@P?l@@v@B`@?`@@t@@bA@fAB"
                     },
                     "start_location" : {
                        "lat" : 42.95405170000001,
                        "lng" : -78.7662957
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 464
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 27
                     },
                     "end_location" : {
                        "lat" : 42.9103132,
                        "lng" : -78.7694635
                     },
                     "html_instructions" : "Take exit \u003cb\u003e52 W\u003c/b\u003e for \u003cb\u003eWalden Ave\u003c/b\u003e toward \u003cb\u003eBuffalo\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "_q|dGbbw_NRP\\BRBZDVFb@NRJZRB?JFFBPJNJJJHFDFFJHLDFBDBDDH@B@@@FBFBF@FTx@Ld@Pb@Vr@JTHRDJHNFHDFFDBDFDFDFDDBHBFBFBHBF@F@H@d@@f@?"
                     },
                     "start_location" : {
                        "lat" : 42.9135953,
                        "lng" : -78.7665772
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1284
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 97
                     },
                     "end_location" : {
                        "lat" : 42.91642969999999,
                        "lng" : -78.7625702
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork, follow signs for \u003cb\u003eGalleria Dr\u003c/b\u003e and merge onto \u003cb\u003eGalleria Dr\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "m|{dGbtw_NXHHDD@D@BBDBDBFFBB@?BDBDBD@B@?DJ@D@DBJDR@H@F@H?H?N?HAHAH?FADADAFCHADABCHABCDCDEDEDEHEBEBA@C@C@EBE@E@C?C@C?A?E@m@?s@?i@?G?e@@A?QL}A?i@FY?WAUCQEGAIEKGMGOKIIKMMQKSIQIUQk@wAeEsBoGo@qBQi@CE_@iA?CGMK[Qi@Qi@EOCCEc@q@qBwBuGkB{F"
                     },
                     "start_location" : {
                        "lat" : 42.9103132,
                        "lng" : -78.7694635
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 107
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 38
                     },
                     "end_location" : {
                        "lat" : 42.9156841,
                        "lng" : -78.7617602
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ub}dG`iv_N|@m@t@cAZa@BE@G"
                     },
                     "start_location" : {
                        "lat" : 42.91642969999999,
                        "lng" : -78.7625702
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "ci_gGdtnfN\\LSjAu@UDYPeAp@mEbAaHlAkIjHea@jB{K|@uFyBu@gHeCwPsFwTwHgDkAoL_EuW}IgKoDcA]n@sDrAoI|AwIhBmLhAsGdCoQhA}HrCmK|AiGrAmLlAiLdBeLdBwKxBkKfPgbApCqUvEwWfEeUpCeTNeWOaj@H{ZUsPwBgNgCyJ_BqHi@_HF_Sz@}ChB{BlL{HlCcCxCiBfMaIfViOpDyDtBsDxCiKxQimAlQmkA|a@{oCt^}aC~gAwlHlgB_mLjh@ciDrSmtAdFid@fCu\\ZeM?sQKifAMs~AbGmiGbHk_HT{TYyl@I{Z^eNpCiZxDwSbFqQlR{n@~CeRtAuQTwIK{Yc@sk@u@iaA{@{qAA}Vj@wS`Cco@jCyq@pGocBH_MWqEqAaJiGg]{BuPYoJXwJxD}]`]g{CpCwUlKgr@~M_}@`D_UbAcLd@_NFsSF}TNyb@lAsMhEuPjPyi@fMeb@b]mqAjIy[|FcRpAwFrAyFf@cFDqLg@sKeB}`@wAe\\u@g^TyL|@oMdE_YdLgq@hZegBnAqIb@sIIsHm@uGmBuIwBsFgC_E_EeEgGqHuCmHuK}d@{F}X{Hmj@kIul@aBiL[kFv@yGpDiK~HyM~CmDv@yIh@_R`@_ExAyQh@uIzA_JJ_IFsHdBcNlDoLxGwN~HiL~FkEjGaBla@i@tKoCtUkHdd@iNxGuCtGoFpEiG`EiJfFuU`CyLbDaLvDmIvEeHpFyFjGgE|QoKfIaFzFqF`FaI`EeLxJc`@nDeIhFsF`DeBnD}@rDSzCNtGrBzGlFbV`UpI|H`FpDzGlCvIbAtQ@~g@Gx{@Gf]@|Mc@hOWvS@tp@IrLcBzKwEvk@{\\jv@ad@ft@sb@`TsMrFcGxD{GrJqYhPai@nPuh@tKqWhRk`@jc@u}@jEuJfFyPzDwMrLc\\lBkFbAwArEcIh@iCFoFq@cEqB}DkFmJiDoHeDqJwB_JwEe^aFwh@qB}_@qCoo@qAyZ]}Yc@}o@{AcO_A}EkB}GkLmXsEwMqBoN[oL?cQ?_[Y}OeCqWqFuVwDyRm@yLb@uUbCyQlBsHpCyHjDyGbGyI`R}WzZec@tK_L|OqLzImI~EkGxFqJ`Syc@nIsQnKaPlj@sw@~I{KrGwEdH}C`I_Bx\\mC`Le@|IG`CIdEJfM?hGe@rKu@vGr@lCRhD^bLHl[ExoAMji@@tU^`EFp@TjDhAvApA\\r@hBpFx@dAx@ZnCX`AdBOlCkA|@eEB{CTyAK_BmA_IyUaBaFsDoLkB{F|@m@pAeBDM"
         },
         "summary" : "Queen Elizabeth Way",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
