"use client";

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Bed,
  CalendarBlank,
  Camera,
  CaretLeft,
  CaretRight,
  Compass,
  ForkKnife,
  MapPin,
  Money,
  MoonStars,
  Train,
  UsersThree,
  Wallet,
} from "@phosphor-icons/react";
import { useMemo, useState } from "react";

type CityKey = "zhuhai" | "chaozhou" | "nanao" | "shantou" | "qingdao" | "rongcheng" | "weihai" | "yantai";

type DayPlan = {
  day: number;
  date: string;
  weekday: string;
  city: CityKey;
  title: string;
  mood: string;
  schedule: { time: string; title: string; note: string }[];
};

const cities: Array<{
  key: CityKey;
  name: string;
  en: string;
  dates: string;
  nights: number;
  image: string;
  foodImage: string;
  scenery: string;
  foods: string[];
  tip: string;
}> = [
  { key: "zhuhai", name: "珠海", en: "ZHUHAI", dates: "07.20—07.24", nights: 4, image: "/assets/city-zhuhai.png", foodImage: "/assets/food-zhuhai.png", scenery: "情侣路 · 日月贝 · 澳门一日", foods: ["横琴蚝", "广式茶点", "海鲜大排档"], tip: "澳门当天往返记得带好证件；情侣路很长，优先选择傍晚分段步行。" },
  { key: "chaozhou", name: "潮州", en: "CHAOZHOU", dates: "07.24—07.26", nights: 2, image: "/assets/city-chaozhou.png", foodImage: "/assets/food-chaozhou.png", scenery: "广济桥 · 牌坊街 · 韩江夜色", foods: ["牛肉火锅", "潮州粿品", "生腌"], tip: "古城景点集中，步行加共享单车即可；广济桥白天登桥、晚上看灯。" },
  { key: "nanao", name: "南澳岛", en: "NANAO ISLAND", dates: "07.26—07.28", nights: 2, image: "/assets/city-nanao.png", foodImage: "/assets/food-nanao.png", scenery: "青澳湾 · 灯塔 · 环岛海岸", foods: ["紫菜海胆饭", "海鲜砂锅粥", "清蒸海鱼"], tip: "环岛距离远，公交适合慢游；海边项目以当天风浪和停航通知为准。" },
  { key: "shantou", name: "汕头", en: "SHANTOU", dates: "07.28—07.30", nights: 2, image: "/assets/city-shantou.png", foodImage: "/assets/food-shantou.png", scenery: "小公园 · 西堤 · 老城骑楼", foods: ["牛肉丸粿条", "蚝烙", "牛肉火锅"], tip: "小公园适合下午到夜晚连着逛；热门牛肉店错峰去，点餐按部位少量多点。" },
  { key: "qingdao", name: "青岛", en: "QINGDAO", dates: "07.30—08.04", nights: 5, image: "/assets/city-qingdao.png", foodImage: "/assets/food-qingdao.png", scenery: "八大关 · 栈桥 · 崂山", foods: ["海肠捞饭", "鲅鱼水饺", "啤酒海鲜"], tip: "老城坡路多，穿防滑好走的鞋；崂山单独留一天，不与市区景点硬拼。" },
  { key: "rongcheng", name: "荣成", en: "RONGCHENG", dates: "08.04—08.07", nights: 3, image: "/assets/city-rongcheng.png", foodImage: "/assets/food-rongcheng.png", scenery: "那香海 · 鸡鸣岛 · 成山头", foods: ["胶东海鲜锅", "无花果", "海草房渔家宴"], tip: "景点分散，提前组合包车或网约车；鸡鸣岛是否开航要看当天海况。" },
  { key: "weihai", name: "威海", en: "WEIHAI", dates: "08.07—08.10", nights: 3, image: "/assets/city-weihai.png", foodImage: "/assets/food-weihai.png", scenery: "刘公岛 · 火炬八街 · 环海路", foods: ["韩乐坊烤肉", "乳山生蚝", "海鲜疙瘩汤"], tip: "火炬八街早去更清静；环海路留给晴天，刘公岛船票提前关注余量。" },
  { key: "yantai", name: "烟台", en: "YANTAI", dates: "08.10—08.13", nights: 3, image: "/assets/city-yantai.png", foodImage: "/assets/food-yantai.png", scenery: "养马岛 · 烟台山 · 渔人码头", foods: ["蓬莱小面", "烟台焖子", "海鲜烧烤"], tip: "养马岛建议早出发避开车流；返程航班较晚，最后一天仍可安排轻量市区游。" },
];

const days: DayPlan[] = [
  { day: 1, date: "07.20", weekday: "周一", city: "zhuhai", title: "抵达海滨之城", mood: "用一场蓝调海岸日落，为漫长旅程开场。", schedule: [
    { time: "13:30", title: "成都双流起飞", note: "直飞珠海，不早起" }, { time: "15:55", title: "抵达珠海", note: "前往香洲酒店，放下行李" }, { time: "18:30", title: "情侣路散步", note: "香炉湾看日落，晚餐吃海鲜" },
  ]},
  { day: 2, date: "07.21", weekday: "周二", city: "zhuhai", title: "情侣路的海风", mood: "从日月贝一路走到野狸岛。", schedule: [
    { time: "10:00", title: "日月贝与野狸岛", note: "避开正午最晒时段" }, { time: "16:00", title: "珠海渔女", note: "沿情侣路慢行" }, { time: "19:00", title: "香洲觅食", note: "海鲜与广式茶点" },
  ]},
  { day: 3, date: "07.22", weekday: "周三", city: "zhuhai", title: "澳门当天往返", mood: "不拖行李过关，走一条不回头的老城路线。", schedule: [
    { time: "09:30", title: "拱北过关", note: "证件提前准备" }, { time: "11:00", title: "历史城区", note: "大三巴—议事亭前地" }, { time: "20:00", title: "返回珠海", note: "继续住同一间酒店" },
  ]},
  { day: 4, date: "07.23", weekday: "周四", city: "zhuhai", title: "海岸机动日", mood: "为天气和后续转场留出余地。", schedule: [
    { time: "10:30", title: "睡到自然醒", note: "早餐后再决定路线" }, { time: "15:00", title: "景山或圆明新园", note: "按天气二选一" }, { time: "20:00", title: "整理行李", note: "次日动车去潮州" },
  ]},
  { day: 5, date: "07.24", weekday: "周五", city: "chaozhou", title: "从海滨到古城", mood: "坐动车穿过粤东，在牌坊街落脚。", schedule: [
    { time: "上午", title: "珠海出发", note: "动车直达潮汕站" }, { time: "下午", title: "入住潮州古城", note: "古城附近步行最方便" }, { time: "晚上", title: "牌坊街夜游", note: "西马路吃小吃" },
  ]},
  { day: 6, date: "07.25", weekday: "周六", city: "chaozhou", title: "韩江与古城", mood: "白天看桥，夜里看灯。", schedule: [
    { time: "09:30", title: "开元寺与牌坊街", note: "清晨人少" }, { time: "14:00", title: "广济桥", note: "门票约¥20/人" }, { time: "20:00", title: "广济桥灯光秀", note: "岸边观看即可" },
  ]},
  { day: 7, date: "07.26", weekday: "周日", city: "nanao", title: "上岛去", mood: "从古城转入一片清澈的蓝。", schedule: [
    { time: "上午", title: "潮州出发", note: "城际接驳前往南澳岛" }, { time: "下午", title: "青澳湾入住", note: "海边轻游，不赶环岛" }, { time: "傍晚", title: "北回归线广场", note: "海风与日落" },
  ]},
  { day: 8, date: "07.27", weekday: "周一", city: "nanao", title: "灯塔与海岸公路", mood: "把完整一天交给环岛线。", schedule: [
    { time: "09:00", title: "长山尾灯塔", note: "蓝色海面与跨海大桥" }, { time: "12:00", title: "后宅镇午餐", note: "紫菜炒饭与海鲜" }, { time: "16:00", title: "青澳湾", note: "避开正午，傍晚下海" },
  ]},
  { day: 9, date: "07.28", weekday: "周二", city: "shantou", title: "回到汕头", mood: "离岛以后，只安排轻松的美食夜。", schedule: [
    { time: "上午", title: "南澳岛离岛", note: "公交或网约车回汕头" }, { time: "下午", title: "酒店入住", note: "小公园或高铁站片区" }, { time: "晚上", title: "龙眼南路", note: "牛肉火锅与糖水" },
  ]},
  { day: 10, date: "07.29", weekday: "周三", city: "shantou", title: "骑楼老城的一天", mood: "从小公园走到西堤，把旧时光串起来。", schedule: [
    { time: "09:30", title: "小公园开埠区", note: "骑楼、邮政总局、汕头旅社" }, { time: "16:30", title: "西堤公园", note: "避暑后再去海边" }, { time: "18:30", title: "广场轮渡", note: "往返约¥4/人" },
  ]},
  { day: 11, date: "07.30", weekday: "周四", city: "qingdao", title: "飞往北方海岸", mood: "从潮汕味道，切换到黄海晚风。", schedule: [
    { time: "上午", title: "汕头轻游", note: "不安排远端景点" }, { time: "17:00", title: "抵达潮汕机场", note: "预留充足值机时间" }, { time: "19:00", title: "直飞青岛", note: "21:50落地后休息" },
  ]},
  { day: 12, date: "07.31", weekday: "周五", city: "qingdao", title: "红瓦绿树与海", mood: "第一天先走最经典、最舒展的一段海岸。", schedule: [
    { time: "10:00", title: "八大关", note: "林荫路与老建筑" }, { time: "15:30", title: "第二海水浴场", note: "沿太平角慢行" }, { time: "19:00", title: "五四广场", note: "奥帆中心夜景" },
  ]},
  { day: 13, date: "08.01", weekday: "周六", city: "qingdao", title: "啤酒与市井烟火", mood: "白天读一段城市工业史，晚上把胃交给台东。", schedule: [
    { time: "10:00", title: "青岛啤酒博物馆", note: "提前预约，慢慢参观约2小时" }, { time: "14:30", title: "登州路与老街", note: "边走边拍，不安排远端景点" }, { time: "18:00", title: "台东夜市", note: "海鲜、锅贴和甜沫少量多尝" },
  ]},
  { day: 14, date: "08.02", weekday: "周日", city: "qingdao", title: "一场轻量Citywalk", mood: "大学路、龙江路与栈桥，慢慢走进老城日常。", schedule: [
    { time: "10:30", title: "睡到自然醒", note: "上午留给咖啡和慢早餐" }, { time: "15:00", title: "大学路与龙江路", note: "咖啡馆与老城街巷" }, { time: "18:30", title: "栈桥", note: "海边散步，顺路吃鲅鱼水饺" },
  ]},
  { day: 15, date: "08.03", weekday: "周一", city: "qingdao", title: "山海之间", mood: "崂山与小麦岛二选一，不为打卡赶路。", schedule: [
    { time: "09:00", title: "崂山出发", note: "基础门票与观光车约¥130/人" }, { time: "下午", title: "山海步道", note: "按体力选择游览区" }, { time: "晚上", title: "整理行李", note: "次日去荣成" },
  ]},
  { day: 16, date: "08.04", weekday: "周二", city: "rongcheng", title: "沿黄海继续向东", mood: "一段不早起的动车，把我们送到荣成。", schedule: [
    { time: "11:43", title: "青岛北出发", note: "参考动车，¥78/人" }, { time: "13:34", title: "抵达荣成", note: "入住后在海滨散步" },
  ]},
  { day: 17, date: "08.05", weekday: "周三", city: "rongcheng", title: "那香海与鸡鸣岛", mood: "海上项目交给天气，陆路线永远有备选。", schedule: [
    { time: "09:00", title: "那香海", note: "钻石沙滩与沉船" }, { time: "11:30", title: "鸡鸣岛", note: "船票约¥125/人，买可退" }, { time: "傍晚", title: "海岸日落", note: "停航则改陆地慢游" },
  ]},
  { day: 18, date: "08.06", weekday: "周四", city: "rongcheng", title: "大陆东极", mood: "成山头是一整天的主角。", schedule: [
    { time: "09:00", title: "成山头", note: "门票约¥148/人" }, { time: "下午", title: "摩天岭或动物园", note: "只选一个，保留体力" },
  ]},
  { day: 19, date: "08.07", weekday: "周五", city: "weihai", title: "抵达威海", mood: "短途动车之后，把下午交给城市海岸。", schedule: [
    { time: "11:28", title: "荣成出发", note: "17分钟到威海" }, { time: "下午", title: "威海公园", note: "大相框与悦海公园" }, { time: "晚上", title: "韩乐坊", note: "晚餐与夜市" },
  ]},
  { day: 20, date: "08.08", weekday: "周六", city: "weihai", title: "刘公岛完整一日", mood: "海岛、近代史与一段船程。", schedule: [
    { time: "08:30", title: "乘船上岛", note: "门票+往返船¥122起" }, { time: "上午", title: "甲午战争博物馆", note: "人文主线" }, { time: "下午", title: "森林公园与炮台", note: "观光车按体力购买" },
  ]},
  { day: 21, date: "08.09", weekday: "周日", city: "weihai", title: "西海岸公路", mood: "火炬八街不是终点，海岸线才是。", schedule: [
    { time: "09:00", title: "火炬八街", note: "早到避开人流" }, { time: "11:00", title: "国际海水浴场", note: "沿海步行" }, { time: "16:00", title: "猫头山", note: "注意环海路交通" },
  ]},
  { day: 22, date: "08.10", weekday: "周一", city: "yantai", title: "向烟台出发", mood: "最后一座海滨城市，依旧不赶时间。", schedule: [
    { time: "13:16", title: "威海出发", note: "动车至牟平" }, { time: "下午", title: "转入烟台市区", note: "入住烟台站或滨海线" }, { time: "晚上", title: "朝阳街", note: "轻松晚餐" },
  ]},
  { day: 23, date: "08.11", weekday: "周二", city: "yantai", title: "养马岛的一天", mood: "岛上不换酒店，只带轻装追海。", schedule: [
    { time: "09:30", title: "进入养马岛", note: "包车或网约车组合" }, { time: "中午", title: "海岛午餐", note: "海鲜注意明码标价" }, { time: "傍晚", title: "环岛日落", note: "天气差则回市区馆舍" },
  ]},
  { day: 24, date: "08.12", weekday: "周三", city: "yantai", title: "烟台的历史海岸", mood: "灯塔、领事馆与渔人码头，作为旅程的尾声。", schedule: [
    { time: "09:30", title: "烟台山", note: "景区免费，灯塔¥10/人" }, { time: "14:30", title: "月亮湾与东炮台", note: "沿滨海中路移动" }, { time: "18:00", title: "渔人码头", note: "最后一顿海鲜晚餐" },
  ]},
  { day: 25, date: "08.13", weekday: "周四", city: "yantai", title: "带着海风回成都", mood: "白天留白，晚上直飞回家。", schedule: [
    { time: "上午", title: "自由活动", note: "不安排远端景点" }, { time: "17:30", title: "前往蓬莱机场", note: "预留交通时间" }, { time: "20:50", title: "直飞成都", note: "23:55抵达天府机场" },
  ]},
];

const budgetRows = [
  { label: "机票", amount: 2640, note: "三段直飞，已含机建燃油" },
  { label: "酒店", amount: 4732, note: "24晚，两人合住一间后的人均" },
  { label: "餐饮", amount: 2500, note: "每天两人¥200，折合人均¥100" },
  { label: "动车与城际交通", amount: 387, note: "主要动车票人均" },
  { label: "景点与船票", amount: 559, note: "基础门票及已列船票" },
];
const perPersonBudget = budgetRows.reduce((total, item) => total + item.amount, 0);

function CityImage({ city, className = "" }: { city: (typeof cities)[number]; className?: string }) {
  return <img className={className} src={city.image} alt={`${city.name}：${city.scenery}`} />;
}

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<CityKey>("zhuhai");
  const cityDays = useMemo(() => days.filter((item) => item.city === selectedCity), [selectedCity]);
  const [selectedDay, setSelectedDay] = useState(1);
  const activeDay = days.find((item) => item.day === selectedDay) ?? days[0];
  const activeCity = cities.find((item) => item.key === activeDay.city) ?? cities[0];

  function selectCity(key: CityKey) {
    setSelectedCity(key);
    const first = days.find((item) => item.city === key);
    if (first) setSelectedDay(first.day);
    document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function setCityContent(key: CityKey) {
    setSelectedCity(key);
    const first = days.find((item) => item.city === key);
    if (first) setSelectedDay(first.day);
  }

  function changeDay(delta: number) {
    const next = Math.min(25, Math.max(1, selectedDay + delta));
    setSelectedDay(next);
    setSelectedCity(days[next - 1].city);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="午夜海岸线首页">
          <Compass size={28} weight="duotone" aria-hidden="true" />
          <span><strong>午夜海岸线</strong><small>MIDNIGHT COASTLINE</small></span>
        </a>
        <nav aria-label="主导航">
          <a href="#itinerary">每日行程</a>
          <a href="#destinations">目的地</a>
          <a href="#food">美食</a>
          <a href="#budget">预算</a>
        </nav>
        <div className="trip-meta"><CalendarBlank size={18} /><span>2026.07.20</span><i /><span>25天24晚</span><i /><UsersThree size={19} /><span>2人同行</span></div>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src="/assets/hero-coast.png" alt="蓝调时刻的中国海岸城市与海面" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">CHENGDU TO THE COAST · 2026</p>
          <h1 id="hero-title">沿海而行 <span>· 25天</span><br />南北海岸之旅</h1>
          <p className="hero-date">2026.07.20 — 08.13</p>
          <button className="primary-cta" onClick={() => document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" })}>
            查看每日行程 <ArrowDown size={20} weight="bold" />
          </button>
        </div>
        <div className="hero-corner"><MoonStars size={22} /><span>从南海到黄海<br />把每一晚留给海风</span></div>
      </section>

      <section className="route-rail" aria-label="城市路线">
        <div className="route-start"><Compass size={36} weight="thin" /></div>
        <div className="route-scroll">
          {cities.map((city, index) => (
            <button key={city.key} className={selectedCity === city.key ? "route-stop active" : "route-stop"} onClick={() => selectCity(city.key)}>
              <span className="route-dot" />
              <strong>{city.name}</strong><small>{city.en}</small>
              {index < cities.length - 1 && <ArrowRight className="route-arrow" size={16} aria-hidden="true" />}
            </button>
          ))}
        </div>
      </section>

      <section id="itinerary" className="day-stage" aria-labelledby="day-title">
        <div className="day-copy">
          <div className="day-heading"><span>Day {String(activeDay.day).padStart(2, "0")}</span><div><h2 id="day-title">{activeCity.name}</h2><p>{activeDay.mood}</p></div></div>
          <div className="timeline">
            {activeDay.schedule.map((item) => (
              <div className="timeline-row" key={`${activeDay.day}-${item.time}-${item.title}`}>
                <time>{item.time}</time><span className="timeline-pin" /><div><strong>{item.title}</strong><p>{item.note}</p></div>
              </div>
            ))}
          </div>
          <div className="day-controls">
            <button onClick={() => changeDay(-1)} disabled={selectedDay === 1} aria-label="前一天"><CaretLeft size={20} /></button>
            <span>{activeDay.date} · {activeDay.weekday}</span>
            <button onClick={() => changeDay(1)} disabled={selectedDay === 25} aria-label="后一天"><CaretRight size={20} /></button>
          </div>
          <article className="daily-note" aria-label="今日攻略笔记">
            <div className="daily-note-head"><span>今日攻略</span><small>NOTE · {activeDay.date}</small></div>
            <h3>{activeDay.title}</h3>
            <p className="daily-route"><MapPin size={16} weight="fill" />{activeDay.schedule.map((item) => item.title).join(" → ")}</p>
            <div className="daily-note-grid">
              <p><Camera size={16} /><span><small>怎么玩</small>{activeDay.mood}</span></p>
              <p><ForkKnife size={16} /><span><small>今天吃什么</small>主吃 {activeCity.foods[(activeDay.day - 1) % activeCity.foods.length]}，备选 {activeCity.foods[activeDay.day % activeCity.foods.length]}</span></p>
            </div>
            <p className="daily-tip"><strong>实用贴士</strong>{activeCity.tip}</p>
          </article>
        </div>
        <div className="day-gallery">
          <figure className="main-photo"><CityImage city={activeCity} /><figcaption>{activeCity.scenery}</figcaption></figure>
          <figure><img className="food-crop-left" src={activeCity.foodImage} alt={`${activeCity.name}${activeCity.foods[0]}`} /><figcaption>{activeCity.foods[0]}</figcaption></figure>
          <figure><img className="food-crop-right" src={activeCity.foodImage} alt={`${activeCity.name}${activeCity.foods[1]}`} /><figcaption>{activeCity.foods[1]}</figcaption></figure>
        </div>
      </section>

      <section className="quick-facts" aria-label="当前城市概要">
        <div><Train size={25} weight="duotone" /><span>交通<strong>{activeDay.day === 1 ? "成都 → 珠海" : "查看当日交通"}</strong></span></div>
        <div><Bed size={25} weight="duotone" /><span>住宿<strong>{activeCity.name} · {activeCity.nights}晚</strong></span></div>
        <div><MapPin size={25} weight="duotone" /><span>精选景点<strong>{activeCity.scenery}</strong></span></div>
        <div><Wallet size={25} weight="duotone" /><span>当前预算<strong>人均 ¥{perPersonBudget.toLocaleString("zh-CN")}</strong></span></div>
      </section>

      <section id="destinations" className="journey-hub" aria-labelledby="destination-title">
        <div className="journey-cities">
          <div className="section-heading"><p className="eyebrow">DESTINATION CHAPTERS</p><h2 id="destination-title">八座旅行城市</h2><p>这是整段旅程的主角。点击城市，右侧立即显示对应日程。</p></div>
          <div className="destination-grid">
            {cities.map((city) => (
              <article key={city.key} className={selectedCity === city.key ? "destination-card active" : "destination-card"}>
                <CityImage city={city} />
                <div className="destination-overlay"><p>{city.dates} · {city.nights}晚</p><h3>{city.name}</h3><span>{city.scenery}</span><button onClick={() => setCityContent(city.key)}>查看日程 <ArrowRight size={16} /></button></div>
              </article>
            ))}
          </div>
        </div>
        <aside className="journey-planner" aria-labelledby="planner-title">
          <div className="planner-heading"><p className="eyebrow">DAILY PLAN</p><h2 id="planner-title">{activeCity.name}完整日程</h2><p>{activeCity.dates} · {activeCity.nights}晚</p></div>
          <div className="city-tabs" role="tablist" aria-label="按城市筛选行程">
            {cities.map((city) => <button role="tab" aria-selected={selectedCity === city.key} className={selectedCity === city.key ? "active" : ""} key={city.key} onClick={() => setCityContent(city.key)}>{city.name}</button>)}
          </div>
          <div className="day-list">
            {cityDays.map((day) => (
              <button key={day.day} className={selectedDay === day.day ? "day-list-item active" : "day-list-item"} onClick={() => setSelectedDay(day.day)}>
                <span className="day-number">{String(day.day).padStart(2, "0")}</span>
                <span className="day-date">{day.date}<small>{day.weekday}</small></span>
                <span className="day-summary"><strong>{day.title}</strong><small>{day.mood}</small></span>
                <ArrowRight size={20} />
              </button>
            ))}
          </div>
        </aside>
      </section>

      <section id="food" className="food-section" aria-labelledby="food-title">
        <div className="section-heading light"><p className="eyebrow">TASTE THE COAST</p><h2 id="food-title">点击城市，吃遍海岸</h2><p>当前展示：{activeCity.name}。每座城市都有自己的代表味道。</p></div>
        <div className="food-layout">
          <figure className="food-feature"><img src={activeCity.foodImage} alt={`${activeCity.name}特色美食：${activeCity.foods.join("、")}`} /><figcaption><small>{activeCity.name}</small><strong>{activeCity.foods[0]} · {activeCity.foods[1]}</strong><span>{activeCity.foods.join(" · ")}</span></figcaption></figure>
          <div className="food-notes">
            {cities.map((city) => <button className={selectedCity === city.key ? "active" : ""} key={city.key} onClick={() => setCityContent(city.key)}><span>{city.name}</span><p>{city.foods.join(" · ")}</p><ArrowRight size={18} /></button>)}
          </div>
        </div>
      </section>

      <section id="budget" className="section-wrap budget-section" aria-labelledby="budget-title">
        <div className="section-heading"><p className="eyebrow">PER PERSON BUDGET</p><h2 id="budget-title">一个人的旅行账单</h2><p>按人均展示；酒店已按两人合住一间分摊，餐饮按每天人均¥100计算。</p></div>
        <div className="budget-overview"><div><Money size={32} weight="duotone" /><small>当前已列 · 人均</small><strong>¥{perPersonBudget.toLocaleString("zh-CN")}</strong></div><p>建议另留约10%—15%机动金，用于市内接驳、临时加餐和价格波动。</p></div>
        <div className="budget-categories">
          {budgetRows.map((item) => { const percent = Math.round(item.amount / perPersonBudget * 100); return <article key={item.label}><div className="budget-category-head"><span>{item.label}</span><strong>¥{item.amount.toLocaleString("zh-CN")}</strong></div><div className="budget-bar"><i style={{ width: `${percent}%` }} /></div><p>{percent}% · {item.note}</p></article>; })}
        </div>
      </section>

      <footer>
        <div><Compass size={26} weight="duotone" /><span><strong>午夜海岸线</strong><small>公开旅行攻略 · 更新于2026-07-11</small></span></div>
        <p>图片为授权素材与生成视觉；价格均为查询基线，不代表锁价。海岛行程以天气和停航公告为准。</p>
        <a href="#top">回到顶部 <ArrowUpIcon /></a>
      </footer>
    </main>
  );
}

function ArrowUpIcon() {
  return <ArrowLeft size={16} style={{ transform: "rotate(90deg)" }} aria-hidden="true" />;
}
