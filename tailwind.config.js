const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        shallowCloud: "#EAEEF1", //浅云
        suCai: "#D4DDE1", //素采
        taJian: "#151D29", //獭见
        jiLan: "#3C4654", //霁蓝
        yuYangRan: "#576470", //育阳染
        shanFan: "#F5F3F2", //山矾
        gaoYu: "#EFEFEF", //缟羽
        luoShenZhu: "#D23918", //洛神珠
        huangDan: "#EA5514", //黄丹
        juYi: "#D3A237", //鞠衣
        cuiWei: "#4C8045", //翠微
        rouLan: "#106898", //柔蓝
        qieLan: "#88ABDA", //窃蓝
        biCheng: "#12507B", //碧城
        youTanRui: "#615EA8", //优昙瑞
        tangLiHe: "#955A42", //棠梨褐
        ruanCui: "#006D87", //软翠
  
        ouBi: "#C0D695", //欧碧
        
        huangSuLiu: "#FEDC5E", //黄粟留
        huangBaiYou: "#FFF799", //黄白游
        huangBuLao: "#DB9B34", //黄不老
  
        biShan: "#779649", //碧山
        zhuCao: "#A64036", //朱草
  
        zengQing: "#535164", //曾青
        guanLv: "#2A6E3F", //官绿
        diShiQing: "#003460", //帝释青
        lanCaiHe: "#06436F", //蓝采和
        tianShuiBi: "#5AA4AE", //天水碧
        xiZi: "#87C0CA", //西子
        yunMen: "#A2E2D2", //云门
        zhiZi: "#FAC03D", //栀子
  
        qiGu: "#5D8351", //漆姑
        shiFa: "#6A8D52", //石发
        chunChen: "#A9BE7B", //春辰
  
        youTanRui: "#615EA8", //优昙瑞
        meiMei: "#4E8548", //莓莓
  
        woZhu: "#DD6B7B", //渥赭
  
        cangJia: "#A8BF8F", //苍葭
        tingWuLv: "#68945C", //庭芜绿
        cuiQiu: "#446A37", //翠虬
  
        weiHong: "#A73766", //魏红
  
        kuJin: "#E18A3B", //库金
  
        queMei: "#788A6F", //雀梅
  
        ziBoHan: "#BBA1CB", //紫薄汗
  
        ziPu: "#A6559D", //紫蒲
  
        songHua: "#FFEE6F", //松花
  
        xiangYe: "#ECD452", //缃叶
        
        
        qingMing: "#3271AE", //青冥
        shuiLongYin: "#84A729", //水龙吟
  
        kongQueLan: "#4994C4", //孔雀蓝
  
        renLai: "#9EBC19", //人籁
  
        zheHuang: "#C67915", //柘黄
  
        qiLin: "#12264F", //骐驎
        changChun: "#DC6B82", //长春
        royalPink: "#B83570",
        zhengQing: "#6CA8AF", //正青
        qunQing: "#2E59A7", //群青

        diLai: "#DFCEB4", //
        daKuai: "#BFA782", //
        longZhan: "#5F4321", //
        liuHuang: "#8B7042", //
        danShu: "#873424", //
        
        
        huangHeLiuLi: "#E5A84B", //
  
        
        tealOne: "#007175", //
        erLv: "#5DA39D", //二绿
        tealTwo: "#88BFB8",
        jianDe: "#6F94CD", //监德
        cangCang: "#5976BA", //苍苍
  
        bianQing: "#509296", //扁青
        yaoSe: "#226b68", //矅色
        markerColour: "#56b38f",
  
  
        //Languages
        pythonBlue: "#345a82",
        pythonYellow: "#fad349",
        djangoGreen: "#194b33",
        jsYellow: "#f4e025",
        tsBlue: "#3f7ac6",
        reactBlue: "#2d7ea3",
        cssBlue: "#3966f0",
        htmlOrange: "#e76732",
  
        //MineSweeper Colours
        mineBgGrey: "#cacac4",
        mineBoardColor: "#e8e8de",
        mineCoveredSq: "#cacac0",
        mineSqColour: "#d4d4ca",
        mineSqShadow: "#989892",
        mineSqMistake: "#b6b6ac",
  
        mineBigRedBorder: "#1a242e",
        mineBigRed: "#c8161c",
        mineBigRedDark: "#42161a",
        mineBrightRed: "#d23818",
  
        mineSmileyGrey: "#848480",
        mineSmileyBlack: "#1a242e",
        mineSmileyYellow: "#ecd452",
  
        mineColour1: "#3270ac",
        mineColour2: "#4c8044",
        mineColour3: "#c8161c",
        mineColour4: "#003e74",
        mineColour5: "#7e443a",
        mineColour6: "#509296",
        mineColour7: "#383834",
        mineColour8: "#848480",

        mineColour10: "#106698",
        mineColour12: "#12507a",
        
        //Sorting
        sortingBoard: "#e8e8de",
        sortingRed: "#d24834",
        sortingRedHigh: "#ce6042",
        sortingYellow: "#cab61c",
        sortingYellowHigh: "#cec03e",
        sortingGreen: "#2a6e3e",
        sortingGreenHigh: "#48703e",
        sortingBlue: "#006c88",
        sortingBlueHigh: "#2a7084",
  
        sampleSorting1: "#A67EB6",
        sampleSorting2: "#A979AB",
        sampleSorting3: "#AD75A0",
        sampleSorting4: "#B17095",
        sampleSorting5: "#B46C8A",
        sampleSorting6: "#B8677F",
        sampleSorting7: "#BC6375",
        sampleSorting8: "#BF5E6A",
        sampleSorting9: "#C35A5F",
        sampleSorting10: "#C75554",
        sampleSorting11: "#CA5149",
        sampleSorting12: "#CE4C3E",
        sampleSorting13: "#D24834",
  
        //FreeCell
  
        freeCellBoard: "#244c1a",
        freeCellBoardLight: "#66925c",
        freeCellGreen: "#6C8650",
        freeCellCardEdge: "#8a8a80",
        freeCellWhite: "#ecece8", 
        freeCellBlack: "#1a242e", 
        freeCellRed: "#c8161c", 
        
  
        //Sudoku
  
        sudokuRuYaoQing: "#80a492",   // Lighter by 10 - #8aae9c
        
        sudokuRuYaoLight: "#94b8a6",
        sudokuBoard: "#e8e8de",
        sudokuBoard1a: "#e8e8de",                       //212, 212, 202
        sudokuBoard2a: "#c0c0b6",                       //222, 222, 212
        sudokuBoard3a: "#fff",                       //222, 222, 212
        sudokuBoard1: "#d4d4ca",                       //212, 212, 202
        sudokuBoard2: "#deded4",                       //222, 222, 212
        sudokuBoard3: "#f2f2e8", //     #e8e8de   
        sudokuBoard4: "#c0c0b6", //                    //202, 202, 192
  
        sudokuBoard5: "#e8e8de", 
  
  
        sudokuBoard4a: "#e8e8de", 
        sudokuBoard5a: "#b6b6ac", 
        
        
        sudokuBoard1x: "#c0c0b6",
        sudokuBoard2x: "#c0c0b6",  
        sudokuBoard4x: "#acaca2", 
        sudokuBoard5x: "#cacac0",  
  
        sudokuGrey: "#666662",
        sudokuLightGrey: "#98989e",
        // sudokuGrey: "#666660",
        sudokuArea: "#eeeee8",
  
        colourPath1: '#106898',
        colourPath2: '#136795',
        colourPath3: '#166693',
        colourPath4: '#1A6591',
        colourPath5: '#1D648F',
        colourPath6: '#21638C',
        colourPath7: '#24638A',
        colourPath8: '#276288',
        colourPath9: '#2B6186',
        colourPath10: '#2E6083',
        colourPath11: '#325F81',
        colourPath12: '#355E7F',
        colourPath13: '#385E7D',
        colourPath14: '#3C5D7A',
        colourPath15: '#3F5C78',
        colourPath16: '#435B76',
        colourPath17: '#465A74',
        colourPath18: '#495971',
        colourPath19: '#4D596F',
        colourPath20: '#50586D',
        colourPath21: '#54576B',
        colourPath22: '#575668',
        colourPath23: '#5A5566',
        colourPath24: '#5E5564',
        colourPath25: '#615462',
        colourPath26: '#65535F',
        colourPath27: '#68525D',
        colourPath28: '#6B515B',
        colourPath29: '#6F5059',
        colourPath30: '#725056',
        colourPath31: '#764F54',
        colourPath32: '#794E52',
        colourPath33: '#7C4D50',
        colourPath34: '#804C4D',
        colourPath35: '#834B4B',
        colourPath36: '#874B49',
        colourPath37: '#8A4A47',
        colourPath38: '#8D4944',
        colourPath39: '#914842',
        colourPath40: '#944740',
        colourPath41: '#98473E',
        colourPath42: '#9B463B',
        colourPath43: '#9E4539',
        colourPath44: '#A24437',
        colourPath45: '#A54335',
        colourPath46: '#A94232',
        colourPath47: '#AC4230',
        colourPath48: '#AF412E',
        colourPath49: '#B3402C',
        colourPath50: '#B63F29',
        colourPath51: '#BA3E27',
        colourPath52: '#BD3D25',
        colourPath53: '#C03D23',
        colourPath54: '#C43C20',
        colourPath55: '#C73B1E',
        colourPath56: '#CB3A1C',
        colourPath57: '#CE391A',
        colourPath58: '#D23918',
  
        //Minesweeper
  
        mineSqColour: "#d4d4ca",
        mineSqShadow: "#989892",
  
        mineBgGrey: "#cacac4",
        mineBoardColor: "#e8e8de",
        mineCoveredSq: "#cacac0",
        mineSqMistake: "#b6b6ac",
  
        mineBigRedBorder: "#1a242e",
        mineBigRed: "#c8161c",
        mineBigRedDark: "#42161a",
        mineBrightRed: "#d23818",
  
        mineSmileyGrey: "#848480",
        mineSmileyBlack: "#1a242e",
        mineSmileyYellow: "#ecd452",
        mineRobotBlue: "#88c0ba",
        mineRobotGrey: "#44485c",
  
        mineColour1: "#3270ac",
        mineColour2: "#4c8044",
        mineColour3: "#c8161c",
        mineColour4: "#003e74",
        mineColour5: "#7e443a",
        mineColour6: "#509296",
        mineColour7: "#383834",
        mineColour8: "#848480",
  
        mineColour1a: "#509296",
        mineColour2a: "#246c6a",
        mineColour3a: "#106698",
        mineColour4a: "#12507a",
        mineColour5a: "#064270",
  
        //Sorting
  
        sortBar: "#7a7a76",
        sortBarDark: "#525258",
  
        //Bubble
  
        bubbleOne: "#de6c7a",
        bubbleTwo: "#b63852",
  
        bubble: {
          1 : "#a67eb6",
          2: "#a87baf",
          3: "#aaa0a8",
          4: "#ac75a1",
          5: "#af729a",
          6: "#b16f93",
          7: "#b36c8c",
          8: "#b66a86",
          9: "#b8677f",
          10: "#ba6478",
          11: "#bd6170",
          12: "#bf5e6a",
          13: "#c15b63",
          14: "#c4595d",
          15: "#c65656",
          16: "#c8534f",
          17: "#cb5048",
          18: "#cd4d41",
          19: "#cf4a3a",
          20: "#d24834"
        },
  
        bubbleColour1: "#a67eb6",
        bubbleColour2: "#a87baf",
        bubbleColour3: "#aa78a8",
        bubbleColour4: "#ac75a1",
        bubbleColour5: "#af729a",
        bubbleColour6: "#b16f93",
        bubbleColour7: "#b36c8c",
        bubbleColour8: "#b66a86",
        bubbleColour9: "#b8677f",
        bubbleColour10: "#ba6478",
        bubbleColour11: "#bd6170",
        bubbleColour12: "#bf5e6a",
        bubbleColour13: "#c15b63",
        bubbleColour14: "#c4595d",
        bubbleColour15: "#c65656",
        bubbleColour16: "#c8534f",
        bubbleColour17: "#cb5048",
        bubbleColour18: "#cd4d41",
        bubbleColour19: "#cf4a3a",
        bubbleColour20: "#d24834",
  
        heapOneA: "#d4b466",
        heapOneB: "#c09c52",
        heapTwoA: "#a2a29e",
        heapTwoB: "#525258",
  
        heapColour1: "#F28E60",
        heapColour2: "#EF905C",
        heapColour3: "#ED9258",
        heapColour4: "#EB9455",
        heapColour5: "#E99651",
        heapColour6: "#E7984E",
        heapColour7: "#E59A4A",
        heapColour8: "#E39C46",
        heapColour9: "#E19E43",
        heapColour10: "#DFA03F",
        heapColour11: "#DCA33C",
        heapColour12: "#DAA538",
        heapColour13: "#D8A735",
        heapColour14: "#D6A931",
        heapColour15: "#D4AB2D",
        heapColour16: "#D2AD2A",
        heapColour17: "#D0AF26",
        heapColour18: "#CEB123",
        heapColour19: "#CCB31F",
        heapColour20: "#CAB61C",
  
        mergeWorkingOn: "#708460",
        mergeRes: "#a8b68c",
  
        mergeColour1: "#B6D432",
        mergeColour2: "#AECE32",
        mergeColour3: "#A7C933",
        mergeColour4: "#9FC333",
        mergeColour5: "#98BE34",
        mergeColour6: "#91B935",
        mergeColour7: "#89B335",
        mergeColour8: "#82AE36",
        mergeColour9: "#7BA937",
        mergeColour10: "#73A337",
        mergeColour11: "#6C9E38",
        mergeColour12: "#649838",
        mergeColour13: "#5D9339",
        mergeColour14: "#568E3A",
        mergeColour15: "#4E883A",
        mergeColour16: "#47833B",
        mergeColour17: "#407E3C",
        mergeColour18: "#38783C",
        mergeColour19: "#31733D",
        mergeColour20: "#2A6E3E",
  
        quickCurPro: "#6e9cc6",
        quickCurPair: "#6a808a",
  
        quickColour1: "#88ACDA",
        quickColour2: "#80A8D5",
        quickColour3: "#79A5D1",
        quickColour4: "#72A1CD",
        quickColour5: "#6B9EC8",
        quickColour6: "#649BC4",
        quickColour7: "#5D97C0",
        quickColour8: "#5594BB",
        quickColour9: "#4E91B7",
        quickColour10: "#478DB3",
        quickColour11: "#408AAE",
        quickColour12: "#3986AA",
        quickColour13: "#3283A6",
        quickColour14: "#2A80A1",
        quickColour15: "#237C9D",
        quickColour16: "#1C7999",
        quickColour17: "#157694",
        quickColour18: "#0E7290",
        quickColour19: "#076F8C",
        quickColour20: "#006C88",
  
        sortColour1: "#88ACDA",
        sortColour2: "#71A1CB",
        sortColour3: "#5A96BE",
        sortColour4: "#438BB0",
        sortColour5: "#2D81A3",
        sortColour6: "#167695",
        sortColour7: "#006C88",
  
        // BURGER SHACK
        burgerBG: "#f4ebdc",
        mainBurgerBG: "#ede1cc",
        burgerMainText: "#4d2316",
        burgerGreen: "#318636",
        burgerOrange: "#ec8740",
  
      },
      spacing: {
        '0.25': '1px',
        '9': '36px',
        '11': '44px',
        '12': '48px',
        '13': '52px',
        '14': '56px',
        '15': '60px',
        '15p': '61px',
        '17': '68px',
        '18': '72px',
        '19': '76px',
        '20': '80px',
        '21': '84px',
        '22': '88px',
        '23': '92px',
        '25': '100px',
        '26': '104px',
        '27': '108px',
        '28': '112px',
        '29': '116px',
        '30': '120px',
        '31': '124px',
        '32': '128px',
        '33': '132px',
        '34': '136px',
        '35': '140px',
        '36': '144px',
        '37': '148px',
        '38': '152px',
        '41': '164px',
        '42': '168px',
        '43': '172px',
        '45': '180px',
        '46': '184px',
        '47': '188px',
        '48': '192px',
        '50': '200px',
        '51': '204px',
        '52': '208px',
        '53': '212px',
        '54': '216px',
        '55': '220px',
        '56': '224px',
        '58': '232px',
        '61': '244px',
        '62': '248px',
        '64': '256px',
        '66': '264px',
        '67': '268px',
        '68': '272px',
        '70': '280px',
        '71': '284px',
        '72': '288px',
        '74': '296px',
        '76': '304px',
        '78': '312px',
        '80': '320px',
        '81': '324px',
        '82': '328px',
        '83': '332px',
        '84': '336px',
        '86': '344px',
        '88': '352px',
        '89': '356px',
        '90': '360px',
        '92': '368px',
        '94': '376px',
        '95': '350px',
        '97': '388px',
        '98': '392px',
        '99': '396px',
        '100': '400px',
        '101': '404px',
        '102': '408px',
        '103': '412px',
        '104': '416px',
        '105': '420px',
        '106': '424px',
        '107': '428px',
        '108': '432px',
        '109': '436px',
        '112': '448px',
        '114': '456px',
        '115': '460px',
        '116': '464px',
        '118': '472px',
        '120': '480px',
        '126': '504px',
        '127': '508px',
        '128': '512px',
        '132': '516px',
        '134': '536px',
        '135': '540px',
        '136': '544px',
        '137': '548px',
        '138': '552px',
        '139': '556px',
        '140': '560px',
        '142': '568px',
        '146': '584px',
        '148': '592px',
        '150': '600px',
        '151': '604px',
        '152': '608px',
        '155': '620px',
        '158': '632px',
        '159': '636px',
        '160': '640px',
        '162': '648px',
        '168': '672px',
        '170': '784px',
        '172': '788px',
        '176': '704px',
        '180': '720px',
        '184': '736px',
        '186': '744px',
        '190': '760px',
        '200': '800px',
        '252': '1008px',
        '260': '1040px',
        '264': '1056px',
        '280': '1120px',
        '288': '1152px',
        '300': '1200px',
        '316': '1264px',
        '320': '1280px',
        '360': '1440px',
        '400': '1600px',
        '560': '2240px',
        '600': '2400px',
        '800': '3200px',
        '1000': '4000px',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },

    fontSize: {
        xs: '0.75rem',
        sm: '0.8rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        'xxxxs': '0.25rem',
        'xxxs': '0.35rem',
        'xxs': '0.5rem',
        'sm2': '0.9rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        '10xl': '10rem',
        '14xl': '18rem',
    }
  },
  plugins: [nextui()],
  darkMode: 'class'
};