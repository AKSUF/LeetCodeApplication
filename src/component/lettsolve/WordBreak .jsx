const WordBreak=({s,wordDict})=>{
    const WordBreak=(s,wordDict)=>{
        const n=s.length;
        const dp=new Array(n+1).fill(false);
        dp[0]=true;

        for(let i=1;i<=n;i++){
            for(let j=0;j<i;j++){
                if(dp[j] && wordDict.includes(s.substring(j,i))){
                    dp[i]=true;
                    break;
                }
            }
        }
        return dp[n];
    }
    const result = WordBreak(s, wordDict);
    return(
        <>
        <div>
            <p>Input String: {s}</p>
            <p>Word Dictionary: {JSON.stringify(wordDict)}</p>
            <p>Can be segmented: {result ? 'Yes' : 'No'}</p>
        </div>
        </>
    )

}
export default WordBreak;