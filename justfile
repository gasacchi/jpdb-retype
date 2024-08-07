dev:
    watchexec -c -w ./src -- just build


build: clean
    bun vite build

clean:
    rm dist -rf
