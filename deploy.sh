timestamp=$(date +%c)
git commit -m "Deploy $timestamp"
git push
echo Deploy submitted
echo Press enter to resume
read