// 环境判断
const ENV = {
  isQX: typeof $task !== "undefined",
  isLoon: typeof $loon !== "undefined",
  isSurge: typeof $httpClient !== "undefined" && typeof $loon === "undefined"
};

// 通用通知函数
function showNotification(title, subtitle, message, openUrl) {
  if (ENV.isQX) {
    openUrl ? $notify(title, subtitle, message, { "open-url": openUrl }) : $notify(title, subtitle, message);
  } else if (ENV.isLoon) {
    openUrl ? $notification.post(title, subtitle, message, openUrl) : $notification.post(title, subtitle, message);
  } else if (ENV.isSurge) {
    openUrl ? $notification.post(title, subtitle, message, { url: openUrl }) : $notification.post(title, subtitle, message);
  }
}

// 日志输出
function log(message) {
  console.log(`[脑洞大反转] ${message}`);
}

// 格式化提示（添加序号）
function formatTips(tipArray) {
  if (!Array.isArray(tipArray) || tipArray.length === 0) return "";
  return tipArray.map((tip, index) => `${index + 1}、${tip}`).join("\n");
}

// 主函数
try {
  let body = $response.body;
  if (!body) throw new Error("响应体为空");

  // 适配脑洞大反转的数组格式 JSON
  let obj = JSON.parse(body);
  log(`原始响应结构: ${Array.isArray(obj) ? "数组格式" : typeof obj}`);

  // 提取 shangyehuaconfig 里的提示文案
  let fullTips = "";
  let shangyeConfig = null;

  // 遍历数组找到 shangyehuaconfig 配置
  if (Array.isArray(obj)) {
    for (let item of obj) {
      if (Array.isArray(item) && item[1] === "shangyehuaconfig" && Array.isArray(item[2])) {
        shangyeConfig = item[2];
        break;
      }
    }
  }

  if (shangyeConfig) {
    fullTips = formatTips(shangyeConfig);
    log(`提取到 ${shangyeConfig.length} 条提示文案`);
    log(`完整提示:\n${fullTips}`);
  } else {
    fullTips = "未找到 shangyehuaconfig 配置";
    log(`未匹配到目标配置节点`);
  }

  // 发送通知（截断超长内容）
  const notifyMsg = fullTips.length > 300 ? fullTips.substring(0, 300) + "…" : fullTips;
  showNotification("脑洞大反转 - 关卡提示", "当前关卡操作指引", notifyMsg);

  // 保持原响应不变（不修改游戏数据）
  $done({ body: body });
} catch (e) {
  log(`处理失败: ${e.message}`);
  $done({ body: $response.body });
}
