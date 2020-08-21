package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestHandler(t *testing.T) {
	movies, err := Handler(Request{
		ID: 28,
	})
	assert.IsType(t, nil, err)
	// fail case
	assert.NotEqual(t, 0, len(movies))
	// pass case
	// assert.NotEqual(t, 0, len(movies))

}
