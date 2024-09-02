# Define the green color code
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

echo "\n\n"
echo "${GREEN}$(pwd) - Running audit${NC}"
echo "\n"
echo "${YELLOW}$(pwd) - Check dependencies${NC}"
echo "\n"
npx --yes depcheck
echo "\n"
echo "${YELLOW}$(pwd) - List TODO's${NC}"
npx --yes leasot '{.,*}**' -i '**/node_modules,**/dist,**/packages' -S -x
echo "\n"

echo "${YELLOW}$(pwd) - Check dependency updates${NC}"
echo "\n"
npx --yes npm-check-updates --target latest

if [ -f "./tsconfig.json" ]; then
    echo "${YELLOW}$(pwd) - Check unused with ts-prune${NC}"
    echo "\n"
    npx --yes ts-prune
    echo "\n"
    echo "${YELLOW}$(pwd) - Check unused with ts-unused-exports${NC}"
    echo "\n"
    npx --yes ts-unused-exports tsconfig.json --showLineNumber --findCompletelyUnusedFiles --maxIssues=100
    echo "\n"
fi
