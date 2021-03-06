# 12. Git 與 GitHub 傻傻分不清楚

# Git 與 GitHub 傻傻分不清楚

接下來的幾天，主題會放在 GitHub 這個以 Git 為核心技術基礎的「雲端版本控制服務平台」上面，因為在這系列的文章中，我將會帶你透過 GitHub 的免費服務來完成網站的部署與自動化編譯的設定。

在昨天的主題裡面，你已經操作過在 GitHub 下載專案程式的流程，但你可能還不是那麼清楚 GitHub 是什麼，又或者你聽過 Git 也聽過 GitHub 但卻不是那麼清楚其中的關連與差異。

今天就來個簡單的介紹吧！

---

## **工程師必備技能：版本控制系統**

先來聊聊為什麼工程師一定要會用版本控制系統，你可以先想想看，如果在現代日漸複雜的軟體開發過程中，像過去在簡報一樣產出一大堆：

- xx報告(1)
- xx報告(2)
- ...
- xx報告(最終版)
- xx報告(這才是最終版)
- xx報告(最終的最終版)
- xx報告(最最最最終版)
- xx報告(不要懷疑 交這個就對了)

......我想現在還活著的工程師應該會是稀有動物吧。

---

## Git：當前最主流的版本控制系統

而版本控制系統只是一個統稱，其實像是 Google 文件的編輯紀錄等等也都是版本控制的一種，但是在軟體開發的版本控制系統中，目前 Git 已經成功佔據了絕對的領導地位。

而透過 Git，在目前的程式碼都修改到一個段落之後，就可以提交出一組改動版本，系統可以記錄下每個改動版本的：

- 修改前 VS 修改後的程式碼
- 修改者
- 修改時間
- 修改原因（修改者可以自行撰寫備註）

而且 Git 也可以使用「分支 (branch)」和「合併 (merge)」的技巧，讓不同的開發者們能同時開發多個系統和功能，但在各自工作時，彼此之間的程式碼不會互相干擾。

---

## GitHub：全球最大工程師交友平台

上面提到了 Git 這套版本控制系統，其實我看過滿多剛要踏入軟體開發這個圈子的人會搞不清楚 Git 跟 GitHub 有什麼關聯與差異。

但簡單來說呢， GitHub 就是一個雲端的服務平台，作為一個大型的主機來讓大家把透過 Git 進行版控的程式發布到雲端，有點像是一個多人共用雲端硬碟的概念。

其實這樣的服務也不是只有 GitHub 在做，只是 GitHub 本身也具有很強的社交性與互動性，同時只要你的程式內容是公開的，就能免費的享受 GitHub 的各種服務，也因為這些原因讓 GitHub 成為開源專案最主要的雲端平台。

後面的主題，就會開始介紹我們會使用到的 GitHub 服務囉！